import React from "react";
import styled from "styled-components";
import { BigGreenText, SimpleText } from "../ui/Text";
import { GreenButton } from "../ui/Buttons";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import AdressCard from "../AdressCard";
import OrderListItem from "../OrderListItem";

function UserInfoPage() {
  return (
    <StyledContainer fluid>
      <StyledBigGreenText>Adresai</StyledBigGreenText>
      <VerticalSpacer />
      <Row>
        {/* TODO: iter per available adresses and set a card for each */}
        <Col>
          <AdressCard />
        </Col>
        <Col>
          <AdressCard />
        </Col>
        <Col>
          <AdressCard />
        </Col>
      </Row>
      <GreenButton>Naujas adresas</GreenButton>
      <StyledBigGreenText>Užsakymai</StyledBigGreenText>
      <VerticalSpacer />
      <OrdersContainer>
        <Row>
          <Col sm={3}>
            <SimpleText>Užsakymas</SimpleText>
          </Col>
          <Col sm={3}>
            <SimpleText>Data</SimpleText>
          </Col>
          <Col sm={3}>
            <SimpleText>Kiekis</SimpleText>
          </Col>
          <Col sm={3}>
            <SimpleText>Suma</SimpleText>
          </Col>
        </Row>
        <VerticalSpacer />
        <OrderListItem />
        <OrderListItem />
      </OrdersContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  min-height: 50vw;
  padding-top: 50px;
  margin: 0 auto;
  max-width: 80%;
`;

const StyledBigGreenText = styled(BigGreenText)`
  text-align: center;
`;

const VerticalSpacer = styled.div`
  height: 1rem;
`;

const OrdersContainer = styled.div`
  padding: 50px 40px 50px 40px;
  background: #ffffff !important;
  border-radius: 8px;
  text-align: left;
  margin-bottom: 4rem;
`;

export default UserInfoPage;
