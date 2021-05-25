import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import AdminOrderListItem from "../AdminOrderListItem";
import AdminProductListItem from "../AdminProductListItem";
import { Header1Center } from "../ui/Text";
import { TableHead } from "../ui/Text";
import { GetAllOrders, GetUserAuth } from "../../services";
import { useHistory } from "react-router-dom";
import { Context } from "../../store";

function Admin() {
  const history = useHistory();
  const navigate = (url) => {
    history.push(url);
  };
  const [state, dispatch] = useContext(Context);

  const [orders, setOrders] = useState(null);
  const products = state.products;

  useEffect(() => {
    GetUserAuth().then((user) => {
      if (user == null) {
        navigate("/");
      } else {
        if (user.userRole != "Owner") {
          navigate("/");
        }
      }
    });
  }, []);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    GetAllOrders().then((p) => {
      setOrders(p);
    });
  };
  return (
    <Container>
      <Header1Center>Užsakymai</Header1Center>

      <div className="orders-container">
        <Row className="table-head-container">
          <Col sm={4}>
            <TableHead>Užsakymas</TableHead>
          </Col>
          <Col sm={3}>
            <TableHead>Būsena</TableHead>
          </Col>
          <Col sm={3}>
            <TableHead>Kiekis</TableHead>
          </Col>
          <Col sm={2}></Col>
        </Row>
        {orders
          ? orders.map((o) => (
              <AdminOrderListItem
                id={o.id}
                total={o.totalPrice}
                status={o.orderStatus}
              />
            ))
          : null}
      </div>

      <Header1Center>Prekės</Header1Center>
      <div className="orders-container">
        <Row className="table-head-container">
          <Col sm={1}>
            <TableHead>ID</TableHead>
          </Col>
          <Col sm={4}>
            <TableHead>Prekė</TableHead>
          </Col>
          <Col sm={2}>
            <TableHead>Kiekis</TableHead>
          </Col>
          <Col sm={2}>
            <TableHead>Kaina</TableHead>
          </Col>
          <Col sm={1}></Col>
          <Col sm={2}></Col>
        </Row>
        {products
          ? products.map((p) => <AdminProductListItem id={p.id} />)
          : null}
      </div>
    </Container>
  );
}

export default Admin;
