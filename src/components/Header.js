import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  return (
    <HeaderContainer>
      <Container>
        <Row>
          <Col xs={3}>
            <div className="logo">
              <LogoText1>Flower</LogoText1>
              <LogoText2>Shop</LogoText2>
            </div>
          </Col>
          <Col xs={5} className="search-input-container">
            <Form.Control type="text" placeholder="Search for flowers" className="search-input"/>
            <FontAwesomeIcon icon={faSearch} className="search-input-icon"/>
          </Col>
          <Col xs={4} className="header-info-container">
            <div className="header-info">
              <UserIcon className="user-icon">Login</UserIcon>
              <CartIcon className="cart-icon">Cart</CartIcon>
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
  font-family: 'Roboto', sans-serif;
`;
const UserIcon = styled.span``;
const CartIcon = styled.span``;

const LogoText1 = styled.span``;

const LogoText2 = styled.span`
  color: #8FB56A;
`;

export default Header;
