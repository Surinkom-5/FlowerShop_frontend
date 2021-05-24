import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "../CartItem";
import { Row, Col, Form } from "react-bootstrap";
import {TextInput,SubmitButton} from "../ui/Form";

import { CartHeader, TableHead } from "../ui/Text";
import { useSelector } from "react-redux";
import {
  GetCategories,
  GetProducts,
  GetCart,
  GetUser,
  GetAddresses,
  AddToCart
} from "../../services";
import { useDispatch } from "react-redux";


function CartPage(props) {
  const [rulesAgreementChecked, setRulesAgreementChecked] = useState(false);
  const [typeOfPayment, setTypeOfPayment] = useState(null);
  const cart = useSelector((state) => state.appReducer.cart);
  const [addresses, setAddresses] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.appReducer.user);

  const [addressId, setAddressId] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    // get addresses
    GetAddresses(dispatch).then((p) => {
      setAddresses(p);
    });
  };
  return (
    <Container>
      <CartHeader num="1">Krepšelis</CartHeader>
      <div className="cart-items-container">
        <Row className="table-head-container">
            <Col xs={6}>
              <TableHead>Prekė</TableHead>
            </Col>
            <Col xs={2}>
              <TableHead>Kiekis</TableHead>
            </Col>
            <Col xs={2}>
              <TableHead>Kaina</TableHead>
            </Col>
            <Col xs={2}>
            </Col>
        </Row>
        {cart ? (cart.cartItems.map((c) => (
          <CartItem />
        ))) : null}
      </div>
      <Row>
        <Col xs={6}>
        <CartHeader num="2">Pristatymo informacija</CartHeader>
        {user ? (
        <form>
            <div key='radio' className="mb-3">
            {addresses ? (addresses.map((c) => (
          <Form.Check 
          custom
          name='addressId'
          type='radio'
          id={`${c.addressId}`}
          label={`${c.city}`}
          onChange={(e) => {
            setAddressId(e.target.id);
          }}
        />
        ))) : null}

            </div>
        </form>
        ) : (
          <form className="cart-address-container">
            <TextInput type="text" placeholder="Vardas" />
            <br/>
            <TextInput type="text" placeholder="Pavardė" />
            <br/>
            <TextInput type="text" placeholder="Adresas" />
            <br/>
            <Row>
              <Col xs={6}>
                <TextInput type="text" placeholder="Miestas" />
              </Col>
              <Col xs={6}>
                <TextInput type="text" placeholder="Pašto kodas" />
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={6}>
                <TextInput type="text" placeholder="Telefono numeris" />
              </Col>
              <Col xs={6}>
                <TextInput type="text" placeholder="El.pašto adresas" />
              </Col>
            </Row>
          </form>
        )}

        </Col>
        <Col xs={6}>
        <CartHeader num="3">Mokėjimas</CartHeader>
        <div className="payment-container">
          <Row className="payment-info">
            <Col xs={6} className="payment-info-label">
              Galutinė kaina
            </Col>
            <Col xs={6}>
            {cart ?  (
              cart.price
        ) : null}€
            </Col>
          </Row>
          <br/>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="term_check"/>
            <label className="custom-control-label" for="term_check">Su paslaugos teikimo sąlygomis ir taisyklėmis bei privatumo politika susipažinau ir sutinku.</label>
          </div>
          <br/>
          <SubmitButton>Sukurti užsakymą</SubmitButton>

        </div>

        </Col>
      </Row>
    </Container>
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

export default CartPage;
