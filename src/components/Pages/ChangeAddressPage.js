import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Header1Center } from "../ui/Text";
import {TextInput,SubmitButton} from "../ui/Form";



function ChangeAddressPage() {
  return (
    <Container>
      <Header1Center>Atnaujinti adresą</Header1Center>
      <Row className="justify-content-center">
        <Col xs={6}>
          <form className="address-container">
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
            <br/>
            <SubmitButton>Atnaujinti</SubmitButton>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangeAddressPage;
