import React from "react";
import { Header1Center } from "../ui/Text";
import {TextInput,SubmitButton,RegisterForm} from "../ui/Form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RegisterPage() {
  return (
    <Container>
      <Header1Center className="text-center">Sukurti paskyrą</Header1Center>
      <Row className="justify-content-center">
        <Col xs={4}>
          <RegisterForm/>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
