import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Header1Center } from "../ui/Text";
import { TextInput, SubmitButton } from "../ui/Form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { GetAddresses, UpdateAddress } from "../../services";
import { SmallGreenText, SmallGreenLink } from "../../components/ui/Text";

function ChangeAddressPage() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  const [code, setCode] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (address) {
      setCity(address.city);
      setStreet(address.street);
      setCode(address.postalCode);
    }
  }, [address]);

  const loadData = () => {
    // get address
    GetAddresses(dispatch).then((p) => {
      setAddress(p.find((c) => c.addressId == id));
    });
  };

  const navigateToUserInfo = () => {
    history.push("/user");
  };

  const updateAdress = () => {
    const newAdress = {
      addressId: id,
      street: street,
      city: city,
      postalCode: code,
    };
    UpdateAddress(id, newAdress).then(setShowMessage(true));
  };

  return (
    <Container>
      <Header1Center>Atnaujinti adresą</Header1Center>
      <Row className="justify-content-center">
        <Col xs={6}>
          <div className="address-container">
            <TextInput
              type="text"
              placeholder="Adresas"
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
                setShowMessage(false);
              }}
            />
            <br />
            <Row>
              <Col xs={6}>
                <TextInput
                  type="text"
                  placeholder="Miestas"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setShowMessage(false);
                  }}
                />
              </Col>
              <Col xs={6}>
                <TextInput
                  type="text"
                  placeholder="Pašto kodas"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setShowMessage(false);
                  }}
                />
              </Col>
            </Row>
            <br />

            {showMessage ? (
              <div>
                <br />
                <SmallGreenText>Adresas pakeistas</SmallGreenText>
              </div>
            ) : null}
            <br />
            <SmallGreenLink onClick={navigateToUserInfo}>
              Grįžti į paskyra
            </SmallGreenLink>
            <br />
            <SubmitButton onClick={updateAdress}>Atnaujinti</SubmitButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangeAddressPage;
