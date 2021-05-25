import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Alert } from "react-bootstrap";
import { Header1Center } from "../ui/Text";
import { TextInput, SubmitButton } from "../ui/Form";
import { SmallGreenLink } from "../../components/ui/Text";

import "../../style.css";
import * as axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
import { Context } from "../../store";

function CreateAddressPage() {
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [message, setMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const history = useHistory();

  const navigate = (url) => {
    history.push(url);
  };
  const [state, dispatch] = useContext(Context);

  if (state.user == null) {
    navigate("/");
  }

  const navigateToUserInfo = () => {
    history.push("/user");
  };

  const createAddress = (e) => {
    const data = {
      city: city,
      street: street,
      postalCode: postalCode,
    };
    const cookies = new Cookies();

    const axiosInstance = axios.create({
      baseURL: "http://localhost:57678/api",
    });
    if (cookies.get("userToken")) {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      axiosInstance.post("/Address", data, options).then(
        (response) => {
          setMessage("");
          setSuccessMessage("Adresas sukurtas");
        },
        (error) => {
          if (Array.isArray(Object.values(error.response.data.errors)[0])) {
            var message = Object.values(error.response.data.errors)[0][0];
          } else {
            var message = Object.values(error.response.data.errors)[0];
          }
          setMessage(message);
        }
      );
    }

    e.preventDefault();
  };

  return (
    <Container>
      <Header1Center>Sukurti adresą</Header1Center>
      <Row className="justify-content-center">
        <Col lg={6} xs={12}>
          <form className="address-container">
            {message && <Alert variant="danger">{message}</Alert>}
            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}

            <TextInput
              type="text"
              placeholder="Adresas"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              name="street"
            />
            <Row>
              <Col lg={6} xs={12}>
                <TextInput
                  type="text"
                  placeholder="Miestas"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  name="city"
                />
              </Col>

              <Col lg={6} xs={12}>
                <TextInput
                  type="text"
                  placeholder="Pašto kodas"
                  onChange={(e) => {
                    setPostalCode(e.target.value);
                  }}
                  name="postalCode"
                />
              </Col>
            </Row>
            <br />
            <SmallGreenLink onClick={navigateToUserInfo}>
              Grįžti į paskyra
            </SmallGreenLink>
            <br />
            <SubmitButton onClick={createAddress}>Sukurti</SubmitButton>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateAddressPage;
