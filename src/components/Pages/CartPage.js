import React, { useState } from "react";
import styled from "styled-components";
import { BigGreenText, SmallGreenText } from "../ui/Text";
import { Checkbox, GreenButton } from "../ui/Buttons";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "../CartItem";
import { Row, Col } from "react-bootstrap";
import RegularInput from "../ui/Input";
import Checkmark from "../ui/Checkmark";
import { PaymentTypes } from "../../utils/types";

function CartPage(props) {
  const [rulesAgreementChecked, setRulesAgreementChecked] = useState(false);
  const [typeOfPayment, setTypeOfPayment] = useState(null);

  return (
    <StyledContainer fluid>
      <StyledBigGreenText>Krepšelis</StyledBigGreenText>
      <VerticalSpacer />
      <CartContainer>
        <Row>
          <Col sm={6}>
            <Text>Prekė</Text>
          </Col>
          <Col sm={3}>
            <Text>Kiekis</Text>
          </Col>
          <Col sm={3}>
            <Text>Kaina</Text>
          </Col>
        </Row>
        <VerticalSpacer />
        {/* TODO: iter per item list and set components */}
        <CartItem />
        <CartItem />
      </CartContainer>
      <Row>
        <Col sm={6}>
          <StyledBigGreenText>Pristatymo informacija</StyledBigGreenText>
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
          </CartContainer>
        </Col>
        <Col sm={6}>
          <StyledBigGreenText>Mokėjimo būdas</StyledBigGreenText>
          <VerticalSpacer />
          <CartContainer>
            <Checkmark
              smallLabel
              id="rules"
              label="Su paslaugos teikimo sąlygomis ir taisyklėmis bei privatumo
              politika susipažinau ir sutinku."
              value={rulesAgreementChecked}
              checked={rulesAgreementChecked}
              onChange={({ target }) =>
                setRulesAgreementChecked(!rulesAgreementChecked)
              }
            />
            <VerticalSpacer />
            <SmallGreenText>Pasirinkite mokėjimo būdą:</SmallGreenText>
            <VerticalSpacer />
            <Checkmark
              id="pm1"
              label="Mokėti per El. bankininkystę"
              value={typeOfPayment === PaymentTypes.EBanking}
              checked={typeOfPayment === PaymentTypes.EBanking}
              onChange={({ target }) => setTypeOfPayment(PaymentTypes.EBanking)}
            />
            <Checkmark
              id="pm2"
              label="Mokėti bankiniu pavedimu"
              value={typeOfPayment === PaymentTypes.BankTransaction}
              checked={typeOfPayment === PaymentTypes.BankTransaction}
              onChange={({ target }) =>
                setTypeOfPayment(PaymentTypes.BankTransaction)
              }
            />
            {/* TODO: make button disabled when checkboxes not selected */}
            <StyledGreenButton>Užsakyti</StyledGreenButton>
          </CartContainer>
        </Col>
      </Row>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  min-height: 50vw;
  padding-top: 50px;
  margin: 0 auto;
  max-width: 80%;
`;

const Text = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  font-weight: 600;
  padding-right: 20px;
  color: ${(props) => (props.dimmed ? "#AAAAAA" : "#000000")};
`;

const StyledBigGreenText = styled(BigGreenText)`
  self-align: auto;
`;

const CardSliderContainer = styled.div`
  display: flex;
`;

// TODO: horizontal and vertical spacers are mixed??
const VerticalSpacer = styled.div`
  height: 1rem;
`;

const HorizontalSpacer = styled.div`
  width: 40px;
`;

const CartContainer = styled.div`
  padding: 50px 40px 50px 40px;
  background: #ffffff !important;
  border-radius: 8px;
  text-align: left;
  margin-bottom: 4rem;
`;

const StyledGreenButton = styled(GreenButton)`
  margin-left: auto;
`;

export default CartPage;
