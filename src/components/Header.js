import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { GetCategories, GetProducts, GetUser, GetCart } from "../services";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import SearchBar from "./SearchBar";
import { Context } from "../store";

function Header() {
  const history = useHistory();

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    GetUser(dispatch);
    GetCart(dispatch);
    GetProducts(dispatch);
    GetCategories(dispatch);
  }, []);

  const user = state.user;

  const navigate = (url) => {
    history.push(url);
  };

  return (
    <div className="header-container">
      <Container>
        <Row>
          <Col lg={3} xs={12}>
            <div className="logo text-center" onClick={() => navigate("/")}>
              <span>Gėlių</span>
              <span className="logoText2">Parduotuvė</span>
            </div>
          </Col>
          <Col lg={6} xs={12} className="search-input-container">
            <SearchBar />
          </Col>
          <Col lg={3} xs={12} className="header-info-container">
            <div className="header-info">
              {user != null && user.userRole == "Owner" ? (
                <span className="admin-icon" onClick={() => navigate("/admin")}></span>
              ) : null}
              
              {user == null ? (
                <span onClick={() => navigate("/login")} className="user-icon">
                  Prisijungti
                </span>
              ) : (
                <span onClick={() => navigate("/user")} className="user-icon">
                  Paskyra
                </span>
              )}

              <span className="cart-icon" onClick={() => navigate("/cart")}>
                Krepšelis
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
