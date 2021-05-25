import React,{useContext,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import { GetCategories, GetProducts, GetUser} from "../services";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import {Context} from '../store/store'



function Header() {
  const history = useHistory();

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    GetUser(dispatch);
  }, []);

  const user = state.user;

  const navigate = (url) => {
    history.push(url);
  };

  return (
    <div className="header-container">
      <Container>
        <Row>
          <Col xs={3}>
            <div className="logo" onClick={() => navigate("/")}>
              <span>Gėlių</span>
              <span className="logoText2">Parduotuvė</span>
            </div>
          </Col>
          <Col xs={6} className="search-input-container">
            <SearchBar/>
          </Col>
          <Col xs={3} className="header-info-container">
            <div className="header-info">
              {/* TODO: make a conditional statement: if user logged in: button "Logoff" */}
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
                Pirkinių krepšelis
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
