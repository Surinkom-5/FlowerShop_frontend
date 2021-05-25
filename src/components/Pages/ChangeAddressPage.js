import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Alert } from "react-bootstrap";
import { Header1Center } from "../ui/Text";
import { TextInput, SubmitButton } from "../ui/Form";
import { useHistory, useParams } from "react-router";
import { GetAddresses, GetUserAuth } from "../../services";
import { SmallGreenLink } from "../../components/ui/Text";
import { Context } from "../../store";
import * as axios from "axios";
import Cookies from "universal-cookie";

function ChangeAddressPage() {
  const { id } = useParams();
  const history = useHistory();

  const navigate = (url) => {
    history.push(url);
  };
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    GetUserAuth().then((user) => {
      if (user == null) {
        navigate("/");
      }
    });
  }, []);

  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [message, setMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (address) {
      setCity(address.city);
      setStreet(address.street);
      setPostalCode(address.postalCode);
    }
  }, [address]);

  const loadData = () => {
    GetAddresses(dispatch).then((p) => {
      setAddress(p.find((c) => c.addressId == id));
    });
  };

  const navigateToUserInfo = () => {
    history.push("/user");
  };

  const updateAddress = (e) => {
    const data = {
      addressId: id,
      street: street,
      city: city,
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
      axiosInstance.patch(`/Address/${id}`, data, options).then(
        (response) => {
          setMessage("");
          setSuccessMessage("Adresas atnaujintas");
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

    // UpdateAddress(id, newAdress).then(setShowMessage(true));
  };

  return (
    <Container>
      <Header1Center>Atnaujinti adresą</Header1Center>
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
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
            <Row>
              <Col lg={6} xs={12}>
                <TextInput
                  type="text"
                  placeholder="Miestas"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </Col>
              <Col lg={6} xs={12}>
                <TextInput
                  type="text"
                  placeholder="Pašto kodas"
                  value={postalCode}
                  onChange={(e) => {
                    setPostalCode(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <br />
            <SmallGreenLink onClick={navigateToUserInfo}>
              Grįžti į paskyra
            </SmallGreenLink>
            <br />
            <SubmitButton onClick={updateAddress}>Atnaujinti</SubmitButton>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangeAddressPage;
