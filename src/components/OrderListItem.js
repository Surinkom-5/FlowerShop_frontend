import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { SimpleText } from "./ui/Text";

function OrderListItem(props) {
  return (
    <Row className="orders-item">
      <Col sm={3}>
        <span>{props.order}</span>
      </Col>
      <Col sm={3}>
        <span>{props.date}</span>
      </Col>
      <Col sm={3}>
        <span>{props.amount}</span>
      </Col>
      <Col sm={3}>
        <span>{props.price} €</span>
      </Col>
    </Row>
  );
}

OrderListItem.defaultProps = {
  order: "Pavadinimas",
  date: "YYYY-MM-DD",
  amount: "0",
  price: "0",
};


export default OrderListItem;
