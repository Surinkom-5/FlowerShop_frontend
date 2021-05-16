import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import "bootstrap/dist/css/bootstrap.min.css";

class TextInput extends React.Component {
    render() {
      return (
        <Form.Control className="text-input" type={this.props.type} placeholder={this.props.placeholder} name={this.props.name}/>
      );
    };
}
class SubmitButton extends React.Component {
  render() {
    return (
      <button type="submit" className="btn submit-button">{this.props.children}</button>
    );
  };
}

export { TextInput, SubmitButton };