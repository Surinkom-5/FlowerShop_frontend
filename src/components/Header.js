import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  const history = useHistory();
  const navigate = (url) => {
    history.push(url);
  };
  return (
    <div className="header-container">
      <Container>
        <Row>
          <Col xs={3}>
            <div className="logo" onClick={null /** navigate to home page */}>
              <span>Gėlių</span>
              <span className="logoText2">Parduotuvė</span>
            </div>
          </Col>
          <Col xs={5} className="search-input-container">
            <Form.Control
              type="text"
              placeholder="Search for flowers"
              className="search-input"
            />
            <FontAwesomeIcon icon={faSearch} className="search-input-icon" />
          </Col>
          <Col xs={4} className="header-info-container">
            <div className="header-info">
              <span
                onClick={() => navigate("/login")}
                className="user-icon"
              >
                Prisijungti
              </span>
              <span className="cart-icon">Pirkinių krepšelis</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
