import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "../CartItem";
import { Row, Col, Form, Alert } from "react-bootstrap";
import { TextInput, SubmitButton } from "../ui/Form";

import { CartHeader, TableHead } from "../ui/Text";
import { GetCart, GetAddresses } from "../../services";
import Cookies from "universal-cookie";
import * as axios from "axios";
import { useHistory } from "react-router-dom";

import { Context } from "../../store";

function CartPage(props) {
  const [rulesAgreementChecked, setRulesAgreementChecked] = useState(false);
  const [addresses, setAddresses] = useState(null);
  const [message, setMessage] = useState(null);
  const [state, dispatch] = useContext(Context);
  const history = useHistory();


  const [addressId, setAddressId] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [comment, setComment] = useState('');

  const navigate = (url) => {
    history.push(url);
  };
  const cookies = new Cookies();

  useEffect(() => {
    loadData();
    GetCart(dispatch);
  }, []);

  const loadData = () => {
    GetAddresses(dispatch).then((p) => {
      setAddresses(p);
    });
  };
  const cart = state.cart;
  const user = state.user;

  const checkRules = (e) => {
    setRulesAgreementChecked(e.target.checked);
  };

  const createOrder = (e) => {
    if (!cart.cartItems.length) {
      setMessage("Krepšelis yra tuščias!");
      return;
    }

    if (state.user) {
      if (addressId == null) {
        setMessage("Pasirinkite adresą");
        return;
      }
      if (!rulesAgreementChecked) {
        setMessage("Sutikite su taisyklėmis");
        return;
      }
      const orderData = {
        addressId: addressId,
        comment: comment,
      };
      if (cookies.get("cartId") && cookies.get("userToken")) {
        const axiosInstance = axios.create({
          baseURL: "http://localhost:57678/api",
        });
        const options = {
          headers: { cartCookie: cookies.get("cartId"),Authorization: "Bearer " + cookies.get("userToken") },
        };
        axiosInstance.post("/Orders", orderData, options).then(
          (response) => {
            cookies.remove('cartId', { path: '/' });
            navigate('/order-confirmation');
          },
          (error) => {
            setMessage("Klaida pateikiant užsakymą");
          }
        );
      }
    } else {
      if (!firstname) {
        setMessage("Įveskite vardą");
        return;
      }
      if (!lastname) {
        setMessage("Įveskite pavardę");
        return;
      }
      if (!street) {
        setMessage("Įveskite adresą");
        return;
      }
      if (!city) {
        setMessage("Įveskite miestą");
        return;
      }
      if (!postalCode) {
        setMessage("Įveskite pašto kodą");
        return;
      }
      if (!phone) {
        setMessage("Įveskite telefono numerį");
        return;
      }
      if (!email) {
        setMessage("Įveskite el. pašto adresą");
        return;
      }
      if (!rulesAgreementChecked) {
        setMessage("Sutikite su taisyklėmis");
        return;
      }
      const orderData = {
        comment: comment,
        email: email,
        phoneNumber: phone,
        firstName: firstname,
        lastName: lastname,
        city: city,
        address: street,
        postCode: postalCode,
      };
      if (cookies.get("cartId")) {
        const axiosInstance = axios.create({
          baseURL: "http://localhost:57678/api",
        });
        const options = {
          headers: { cartCookie: cookies.get("cartId") },
        };
        axiosInstance.post("/Orders", orderData, options).then(
          (response) => {
            cookies.remove('cartId', { path: '/' });
            navigate('/order-confirmation');
          },
          (error) => {
            setMessage("Klaida pateikiant užsakymą");
          }
        );
      }
    }

    e.preventDefault();
  };
  return (
    <Container>
      <CartHeader num="1">Krepšelis</CartHeader>
      <div className="cart-items-container">
        <Row className="table-head-container">
          <Col lg={6} xs={4}>
            <TableHead>Prekė</TableHead>
          </Col>
          <Col lg={2} xs={4}>
            <TableHead>Kiekis</TableHead>
          </Col>
          <Col lg={2} xs={4}>
            <TableHead>Kaina</TableHead>
          </Col>
          <Col lg={2}></Col>
        </Row>
        {cart ? (
          cart.cartItems.length ? (
            cart.cartItems.map((c) => (
              <CartItem id={c.productId} quantity={c.quantity} />
            ))
          ) : (
            <Alert variant="danger">Prekių nėra</Alert>
          )
        ) : (
          <Alert variant="danger">Prekių nėra</Alert>
        )}
      </div>
      <Row>
        <Col lg={6} xs={12}>
          <CartHeader num="2">Pristatymo informacija</CartHeader>
          {user ? (
            <form className="cart-address-container">
              <div key="radio" className="mb-3">
                {addresses
                  ? addresses.map((c) => (
                      <Form.Check
                        custom
                        name="addressId"
                        type="radio"
                        id={`${c.addressId}`}
                        label={`${c.city}, ${c.street} ${c.postalCode}`}
                        onChange={(e) => {
                          setAddressId(e.target.id);
                        }}
                      />
                    ))
                  : null}
              </div>
            </form>
          ) : (
            <form className="cart-address-container">
              <TextInput
                type="text"
                placeholder="Vardas"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
              <TextInput
                type="text"
                placeholder="Pavardė"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
              <TextInput
                type="text"
                placeholder="Adresas"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
              <Row>
                <Col lg={6} xs={12}>
                  <TextInput
                    type="text"
                    placeholder="Miestas"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </Col>
                <Col lg={6} xs={12}>
                  <TextInput
                    type="text"
                    placeholder="Pašto kodas"
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <TextInput
                    type="text"
                    placeholder="Telefono numeris"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </Col>
                <Col lg={6} xs={12}>
                  <TextInput
                    type="text"
                    placeholder="El.pašto adresas"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Col>
              </Row>
            </form>
          )}
        </Col>
        <Col lg={6} xs={12}>
          <CartHeader num="3">Mokėjimas</CartHeader>
          <div className="payment-container">
            {/* <Row className="payment-info">
              <Col lg={6} xs={12} className="payment-info-label">
                Galutinė kaina
              </Col>
              <Col lg={6} xs={12}>
                {cart ? cart.price : null}€
              </Col>
            </Row> */}
            <br />
            <Form.Control
                className="text-input"
                as="textarea"
                value={comment}
                placeholder="Komentaras"
                rows={3}
                onChange={(e) => {
                    setComment(e.target.value);
                  }}
            />
            <br/>
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="term_check"
                onClick={checkRules}
              />
              <label className="custom-control-label" for="term_check">
                Su paslaugos teikimo sąlygomis ir taisyklėmis bei privatumo
                politika susipažinau ir sutinku.
              </label>
            </div>
            <br />
            {message ? <Alert variant="danger">{message}</Alert> : null}

            <SubmitButton onClick={createOrder}>Sukurti užsakymą</SubmitButton>
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
