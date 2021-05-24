import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { SmallGreenText } from "./Text";

import * as axios from "axios";
import Cookies from "universal-cookie";

class TextInput extends React.Component {
  render() {
    return (
      <Form.Control
        className="text-input"
        type={this.props.type}
        value={this.props.value}
        placeholder={this.props.placeholder}
        name={this.props.name}
        onChange={this.props.onChange}
      />
    );
  }
}
class SubmitButton extends React.Component {
  render() {
    return (
      <button
        type="submit"
        className="btn submit-button"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
      redirect: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:57678/api",
    });

    const cookies = new Cookies();

    axiosInstance.post("/Identity/Login", this.state).then(
      (response) => {
        this.setState({
          message: "",
        });
        cookies.set("userToken", response.data.token, { path: "/" });
        this.setState({
          redirect: "/",
        });
      },
      (error) => {
        if (Array.isArray(Object.values(error.response.data.errors)[0])) {
          var message = Object.values(error.response.data.errors)[0][0];
        } else {
          var message = Object.values(error.response.data.errors)[0];
        }
        //   Object.values(error.response.data.errors).forEach(function(err) {
        //     message += err+'';
        // });
        this.setState({
          message: message,
        });
      }
    );

    event.preventDefault();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <form className="login-container" onSubmit={this.handleSubmit}>
        {this.state.message && (
          <Alert variant="danger">{this.state.message}</Alert>
        )}
        <TextInput
          type="text"
          placeholder="El. pašto adresas"
          name="email"
          onChange={this.handleInputChange}
        />
        <br />
        <TextInput
          type="password"
          placeholder="Slaptažodis"
          name="password"
          onChange={this.handleInputChange}
        />
        <br />
        <SubmitButton>Prisijungti</SubmitButton>
      </form>
    );
  }
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirm: "",
      name: "",
      message: "",
      redirect: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    this.setState({
      name: this.state.email,
    });
  }

  handleSubmit(event) {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:57678/api",
    });

    if (this.state.password != this.state.password_confirm) {
      this.setState({
        message: "Slaptažodžiai nesutampa",
      });
    } else {
      this.setState({
        message: "",
      });
      axiosInstance.post("/Identity/Register", this.state).then(
        (response) => {
          this.setState({
            message: "",
          });
          this.setState({
            redirect: "/login",
          });
        },
        (error) => {
          if (Array.isArray(Object.values(error.response.data.errors)[0])) {
            var message = Object.values(error.response.data.errors)[0][0];
          } else {
            var message = Object.values(error.response.data.errors)[0];
          }
          this.setState({
            message: message,
          });
        }
      );
    }

    event.preventDefault();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <form className="register-container" onSubmit={this.handleSubmit}>
        {this.state.message && (
          <Alert variant="danger">{this.state.message}</Alert>
        )}
        <TextInput
          type="text"
          placeholder="El. pašto adresas"
          name="email"
          onChange={this.handleInputChange}
        />
        <br />
        <TextInput
          type="password"
          placeholder="Slaptažodis"
          name="password"
          onChange={this.handleInputChange}
        />
        <br />
        <TextInput
          type="password"
          placeholder="Pakartoti slaptažodį"
          name="password_confirm"
          onChange={this.handleInputChange}
        />
        <br />
        <SubmitButton>Sukurti paskyrą</SubmitButton>
      </form>
    );
  }
}

class CreateAddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: "",
      city: "",
      postalCode: "",
      message: "",
      showMessage: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      showMessage: false,
    });
  }

  handleSubmit(event) {
    const cookies = new Cookies();

    const axiosInstance = axios.create({
      baseURL: "http://localhost:57678/api",
    });

    this.setState({
      message: "",
    });
    if (cookies.get("userToken")) {
      const options = {
        headers: { Authorization: "Bearer " + cookies.get("userToken") },
      };
      axiosInstance.post("/Address", this.state, options).then(
        (response) => {
          this.setState({
            message: "",
            showMessage: true,
          });
        },
        (error) => {
          if (Array.isArray(Object.values(error.response.data.errors)[0])) {
            var message = Object.values(error.response.data.errors)[0][0];
          } else {
            var message = Object.values(error.response.data.errors)[0];
          }
          this.setState({
            message: message,
          });
        }
      );
    }

    event.preventDefault();
  }

  render() {
    return (
      <form className="address-container" onSubmit={this.handleSubmit}>
        {this.state.message && (
          <Alert variant="danger">{this.state.message}</Alert>
        )}
        <TextInput
          type="text"
          placeholder="Vardas"
          onChange={this.handleInputChange}
        />
        <br />
        <TextInput
          type="text"
          placeholder="Pavardė"
          onChange={this.handleInputChange}
        />
        <br />
        <TextInput
          type="text"
          placeholder="Adresas"
          onChange={this.handleInputChange}
          name="street"
        />
        <br />
        <Row>
          <Col xs={6}>
            <TextInput
              type="text"
              placeholder="Miestas"
              onChange={this.handleInputChange}
              name="city"
            />
          </Col>
          <Col xs={6}>
            <TextInput
              type="text"
              placeholder="Pašto kodas"
              onChange={this.handleInputChange}
              name="postalCode"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={6}>
            <TextInput
              type="text"
              placeholder="Telefono numeris"
              onChange={this.handleInputChange}
            />
          </Col>
          <Col xs={6}>
            <TextInput
              type="text"
              placeholder="El.pašto adresas"
              onChange={this.handleInputChange}
            />
          </Col>
        </Row>
        {this.state.showMessage ? (
          <div>
            <br />
            <SmallGreenText>Adresas sukurtas</SmallGreenText>
          </div>
        ) : null}
        <br />
        <SubmitButton>Sukurti</SubmitButton>
      </form>
    );
  }
}

export { TextInput, SubmitButton, LoginForm, RegisterForm, CreateAddressForm };
