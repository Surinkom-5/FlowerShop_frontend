import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Badge } from "react-bootstrap";

function OrderListItem(props) {
  return (
    <Row className="orders-item">
      <Col sm={4}>
        <span>{props.id}</span>
      </Col>
      <Col sm={4}>
        <span>{
                    props.status == "Completed" ? (
                        <Badge variant="success">Užbaigta</Badge>
                    ) : (
                        <Badge variant="warning">Patvirtinta</Badge>
                    )}</span>
      </Col>
      <Col sm={4}>
        <span>{props.total} €</span>
      </Col>
    </Row>
  );
}

OrderListItem.defaultProps = {
  order: 0,
  price: "0",
  state: "Patvirtintas"
};

export default OrderListItem;
