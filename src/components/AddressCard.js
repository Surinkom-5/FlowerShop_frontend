import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { GreenButton } from "./ui/Buttons";
import { SimpleText } from "./ui/Text";
import { TextInput, SubmitButton } from "./ui/Form";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

function AdressCard(props) {
  const history = useHistory();

  function navigateChangeAdress() {
    history.push("/address/" + props.id);
  }

  return (
    <Col xs={4}>
      <div className="address-card">
        <span>
          {props.name} {props.surname}
        </span>
        <br />
        <span>
          {props.adress}, {props.city}
        </span>
        <br />
        <span>{props.code}</span>
        <br />
        <span>{props.emailAdress}</span>
        <br />
        <span>{props.phoneNumber}</span>
        <br />
        <br />
        <SubmitButton onClick={navigateChangeAdress}>Keisti</SubmitButton>
      </div>
    </Col>
  );
}

AdressCard.defaultProps = {
  name: "Vardas",
  surname: "Pavardė",
  adress: "Adresas",
  city: "Miestas",
  code: "00000",
  emailAdress: "mail@mail.com",
  phoneNumber: "00000000000",
};

export default AdressCard;
