import React from "react";
import { Header1Center } from "../ui/Text";
import { TextInput, SubmitButton } from "../ui/Form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LoginPage(props) {
  const navigateToRegister = () => {
    props.history.push("/register");
  };
  return (
    <Container>
      <Header1Center>Prisijungti</Header1Center>
      <Row className="justify-content-center">
        <Col xs={4}>
          <form className="login-container">
            <TextInput type="text" placeholder="El. pašto adresas" />
            <br />
            <TextInput type="password" placeholder="Slaptažodis" />
            <br />
            <SubmitButton>Prisijungti</SubmitButton>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
