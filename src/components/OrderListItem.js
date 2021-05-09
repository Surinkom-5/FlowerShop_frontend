import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { SimpleText } from "./ui/Text";

function OrderListItem(props) {
  return (
    <StyledRow>
      <Col sm={3}>
        <SimpleText>{props.order}</SimpleText>
      </Col>
      <Col sm={3}>
        <SimpleText>{props.date}</SimpleText>
      </Col>
      <Col sm={3}>
        <SimpleText>{props.amount}</SimpleText>
      </Col>
      <Col sm={3}>
        <SimpleText>{props.price} €</SimpleText>
      </Col>
    </StyledRow>
  );
}

OrderListItem.defaultProps = {
  order: "Pavadinimas",
  date: "YYYY-MM-DD",
  amount: "0",
  price: "0",
};

const StyledRow = styled(Row)`
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5%;
  &:hover {
    box-shadow: 0 0 2px rgba(145, 188, 106, 1);
  }
`;

export default OrderListItem;
