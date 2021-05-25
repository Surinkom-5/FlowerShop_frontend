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


export { TextInput, SubmitButton };
