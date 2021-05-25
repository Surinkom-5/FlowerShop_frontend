import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Badge } from "react-bootstrap";
import { SubmitButton } from "./ui/Form";
import { useHistory } from "react-router-dom";

function AdminOrderListItem(props) {
  const history = useHistory();
  function navigateToOrder() {
    history.push("/admin-order/" + props.id);
  }
  return (
    <Row className="orders-item">
      <Col sm={4}>
        <span>{props.id}</span>
      </Col>
      <Col sm={3}>
        <span>
          {props.status == "Completed" ? (
            <Badge variant="success">Užbaigta</Badge>
          ) : (
            <Badge variant="warning">Patvirtinta</Badge>
          )}
        </span>
      </Col>
      <Col sm={3}>
        <span>{props.total} €</span>
      </Col>
      <Col sm={2}>
        <SubmitButton onClick={navigateToOrder}>Peržiūrėti</SubmitButton>
      </Col>
    </Row>
  );
}

AdminOrderListItem.defaultProps = {
  order: 0,
  price: "0",
  state: "Patvirtintas",
};

export default AdminOrderListItem;
