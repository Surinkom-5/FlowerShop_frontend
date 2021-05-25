import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import AddressCard from "../AddressCard";
import OrderListItem from "../OrderListItem";
import { Header1Center } from "../ui/Text";
import { TableHead } from "../ui/Text";
import { SubmitButton } from "../ui/Form";
import { GetAddresses, GetOrders } from "../../services";
import { useHistory, useLocation } from "react-router-dom";
import { Context } from "../../store";

function UserInfoPage() {
  const history = useHistory();
  const navigate = (url) => {
    history.push(url);
  };
  const [addresses, setAddresses] = useState(null);
  const [orders, setOrders] = useState(null);
  const [state, dispatch] = useContext(Context);

  if (state.user == null) {
    navigate("/");
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    GetAddresses(dispatch).then((p) => {
      setAddresses(p);
    });
    if(state.user){
      GetOrders(state.user.userId).then((p) => {
        setOrders(p);
      });
    }
  };
  return (
    <Container>
      <Header1Center>Adresai</Header1Center>
      <Row>
        {addresses
          ? addresses.map((a) => (
              <AddressCard
                id={a.addressId}
                city={a.city}
                postalCode={a.postalCode}
                street={a.street}
              />
            ))
          : null}
      </Row>
      <SubmitButton onClick={() => navigate("/create-address")}>
        Naujas adresas
      </SubmitButton>
      <Header1Center>Užsakymai</Header1Center>

      <div className="orders-container">
        <Row className="table-head-container">
          <Col sm={4}>
            <TableHead>Užsakymas</TableHead>
          </Col>
          <Col sm={4}>
            <TableHead>Būsena</TableHead>
          </Col>
          <Col sm={4}>
            <TableHead>Kiekis</TableHead>
          </Col>
        </Row>
        {orders
          ? orders.map((o) => (
              <OrderListItem id={o.id} total={o.totalPrice} status={o.orderStatus}/>
            ))
          : null}
      </div>
    </Container>
  );
}

export default UserInfoPage;
