import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Header1Center } from "../ui/Text";
import {TextInput,SubmitButton,CreateAddressForm} from "../ui/Form";

function CreateAddressPage() {
  return (
    <Container>
      <Header1Center>Sukurti adresą</Header1Center>
      <Row className="justify-content-center">
        <Col xs={6}>
          <CreateAddressForm/>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateAddressPage;
