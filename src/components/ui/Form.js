import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import  { Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import * as axios from "axios";

class TextInput extends React.Component {
    render() {
      return (
        <Form.Control className="text-input" type={this.props.type} placeholder={this.props.placeholder} name={this.props.name} onChange={this.props.onChange}/>
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

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    const axiosInstance = axios.create({
      baseURL: "http://localhost:57678/api",
    });
    

    axiosInstance.post('/Identity/Login', this.state)
    .then((response) => {
      this.setState({
        message: ''
      });
    }, (error) => {
      if(Array.isArray(Object.values(error.response.data.errors)[0])){
        var message = Object.values(error.response.data.errors)[0][0];
      }else{
        var message = Object.values(error.response.data.errors)[0];
      };
    //   Object.values(error.response.data.errors).forEach(function(err) {
    //     message += err+'';
    // });
    this.setState({
      message: message
    });
    
    });

    event.preventDefault();
  }
  

  render() {
    return (
      
      <form className="login-container" onSubmit={this.handleSubmit}>
        {this.state.message && 
        <Alert variant='danger'>
          {this.state.message}
        </Alert>}
        <TextInput type="text" placeholder="El. pašto adresas" name="email" onChange={this.handleInputChange}/>
        <br/>
        <TextInput type="password" placeholder="Slaptažodis" name="password" onChange={this.handleInputChange}/>
        <br/>
        <SubmitButton>Prisijungti</SubmitButton>
      </form>
    );
  }
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirm: '',
      name: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.setState({
      name: this.state.email
    });
  }

  handleSubmit(event) {

    const axiosInstance = axios.create({
      baseURL: "http://localhost:57678/api",
    });
    
    console.log(this.state);
    if(this.state.password != this.state.password_confirm){
      this.setState({
        message: 'Slaptažodžiai nesutampa'
      });
    }else{
      this.setState({
        message: ''
      });
      axiosInstance.post('/Identity/Register', this.state)
      .then((response) => {
        this.setState({
          message: ''
        });
      }, (error) => {
        if(Array.isArray(Object.values(error.response.data.errors)[0])){
          var message = Object.values(error.response.data.errors)[0][0];
        }else{
          var message = Object.values(error.response.data.errors)[0];
        };
      this.setState({
        message: message
      });
      
      });
    }


    event.preventDefault();
  }
  

  render() {
    return (
      
      <form className="register-container" onSubmit={this.handleSubmit}>
        {this.state.message && 
        <Alert variant='danger'>
          {this.state.message}
        </Alert>}
            <TextInput type="text" placeholder="El. pašto adresas" name="email" onChange={this.handleInputChange}/>
            <br/>
            <TextInput type="password" placeholder="Slaptažodis" name="password" onChange={this.handleInputChange}/>
            <br/>
            <TextInput type="password" placeholder="Pakartoti slaptažodį" name="password_confirm" onChange={this.handleInputChange}/>
            <br/>
            <SubmitButton>Sukurti paskyrą</SubmitButton>
          </form>
    );
  }
}

export { TextInput, SubmitButton, LoginForm, RegisterForm };