import React from "react";
import styled from "styled-components";
import { BigGreenText } from "../ui/Text";
import { GreenButton } from "../ui/Buttons";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import RegularInput from "../ui/Input";

function ChangeAdressPage() {
  return (
    <StyledContainer fluid>
      <StyledBigGreenText>Keisti adresą</StyledBigGreenText>
      <VerticalSpacer />
      <CartContainer>
        <RegularInput type="text" placeholder="Vardas" />
        <VerticalSpacer />
        <RegularInput type="text" placeholder="Pavardė" />
        <VerticalSpacer />
        <RegularInput type="text" placeholder="Adresas" />
        <VerticalSpacer />
        <Row>
          <Col sm={6}>
            <RegularInput type="text" placeholder="Miestas" />
            <VerticalSpacer />
            <RegularInput type="text" placeholder="Telefono numeris" />
          </Col>
          <Col sm={6}>
            <RegularInput type="text" placeholder="Pašto kodas" />
            <VerticalSpacer />
            <RegularInput type="text" placeholder="El. pašto adresas" />
          </Col>
        </Row>
        <VerticalSpacer />
        <VerticalSpacer />
        <StyledGreenButton>Išsaugoti</StyledGreenButton>
      </CartContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  min-height: 50vw;
  padding-top: 50px;
  margin: 0 auto;
  max-width: 45%;
`;

const StyledBigGreenText = styled(BigGreenText)`
  text-align: center;
`;

const VerticalSpacer = styled.div`
  height: 1rem;
`;

const CartContainer = styled.div`
  padding: 50px 40px 50px 40px;
  background: #ffffff !important;
  border-radius: 8px;
  text-align: left;
  margin-bottom: 4rem;
`;

const StyledGreenButton = styled(GreenButton)`
  margin: auto;
`;

export default ChangeAdressPage;
