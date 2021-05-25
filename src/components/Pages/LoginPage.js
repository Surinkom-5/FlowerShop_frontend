import React, { useState, useContext,useEffect } from "react";
import { Header1Center } from "../ui/Text";
import { TextInput, SubmitButton } from "../ui/Form";
import * as axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
import { SmallGreenLink } from "../../components/ui/Text";
import { GetUserAuth } from "../../services";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { Context } from "../../store";

function LoginPage(props) {
  const history = useHistory();

  const navigate = (url) => {
    history.push(url);
  };
  const navigateToRegister = () => {
    history.push('/register');
  };

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    GetUserAuth().then((user) => {
        if (user) {
            navigate("/user");
        }
    });
  }, []);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  const login = (e) => {
    const data = {
      email: email,
      password: password,
    };
    const axiosInstance = axios.create({
      baseURL: "http://localhost:57678/api",
    });
    const cookies = new Cookies();

    axiosInstance.post("/Identity/Login", data).then(
      (response) => {
        cookies.set("userToken", response.data.token, { path: "/" });
        navigate("/");
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
    e.preventDefault();
  };

  return (
    <Container>
      <Header1Center>Prisijungti</Header1Center>
      <Row className="justify-content-center">
        <Col lg={4} xs={16}>
          <form className="login-container">
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
            <SmallGreenLink onClick={navigateToRegister}>
              Neturite paskyros?
            </SmallGreenLink><br/>
            <SubmitButton onClick={login}>Prisijungti</SubmitButton>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
