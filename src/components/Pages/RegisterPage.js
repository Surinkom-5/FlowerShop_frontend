import React, { useState, useContext, useEffect } from "react";
import { Header1Center } from "../ui/Text";
import { RegisterForm, TextInput, SubmitButton } from "../ui/Form";
import * as axios from "axios";
import { useHistory } from "react-router-dom";
import { GetUserAuth } from "../../services";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { Context } from "../../store";

function RegisterPage() {
  const history = useHistory();

  const navigate = (url) => {
    history.push(url);
  };
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password_confirm, setPasswordConfirm] = useState(null);
  const [message, setMessage] = useState(null);
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    GetUserAuth().then((user) => {
      if (user) {
        navigate("/user");
      }
    });
  }, []);
  const register = (e) => {
    const data = {
      email: email,
      name: email,
      password: password,
    };
    if (password != password_confirm) {
      setMessage("Slaptažodžiai nesutampa");
    } else {
      const axiosInstance = axios.create({
        baseURL: "http://localhost:57678/api",
      });
      axiosInstance.post("/Identity/Register", data).then(
        (response) => {},
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
      <Header1Center className="text-center">Sukurti paskyrą</Header1Center>
      <Row className="justify-content-center">
        <Col xs={4}>
          <form className="register-container">
            {message && <Alert variant="danger">{message}</Alert>}
            <TextInput
              type="text"
              placeholder="El. pašto adresas"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextInput
              type="password"
              placeholder="Slaptažodis"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <TextInput
              type="password"
              placeholder="Pakartoti slaptažodį"
              name="password_confirm"
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
            <br />
            <SubmitButton onClick={register}>Sukurti paskyrą</SubmitButton>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
