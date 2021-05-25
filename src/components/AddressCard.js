import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SubmitButton } from "./ui/Form";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router";

function AdressCard(props) {
  const history = useHistory();

  function navigateChangeAddress() {
    history.push("/address/" + props.id);
  }

  return (
    <Col xs={12} lg={4}>
      <div className="address-card">
        <span>{props.street}</span>
        <br />
        <span>{props.city}</span>
        <br />
        <span>{props.code}</span>
        <br />
        <br />
        <SubmitButton onClick={navigateChangeAddress}>Keisti</SubmitButton>
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
