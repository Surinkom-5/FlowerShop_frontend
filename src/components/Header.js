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
    <HeaderContainer>
      <Container>
        <Row>
          <Col xs={3}>
            <div className="logo" onClick={null /** navigate to home page */}>
              <LogoText1>Gėlių</LogoText1>
              <LogoText2>Parduotuvė</LogoText2>
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
              <UserIcon
                onClick={() => navigate("/login")}
                className="user-icon"
              >
                Prisijungti
              </UserIcon>
              <CartIcon className="cart-icon">Pirkinių krepšelis</CartIcon>
            </div>
          </Col>
        </Row>
      </Container>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background: #fff;
`;

const Logo = styled.div`
  padding: 22px 0;
  font-weight: bold;
  font-size: 36px;
  font-family: "Roboto", sans-serif;
`;

const UserIcon = styled.span`
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const CartIcon = styled.span``;

const LogoText1 = styled.span``;

const LogoText2 = styled.span`
  color: #8fb56a;
`;

export default Header;
