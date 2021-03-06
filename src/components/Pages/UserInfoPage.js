import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Alert } from "react-bootstrap";
import AddressCard from "../AddressCard";
import OrderListItem from "../OrderListItem";
import { Header1Center } from "../ui/Text";
import { TableHead } from "../ui/Text";
import { SubmitButton } from "../ui/Form";
import { GetAddresses, GetOrders, GetUserAuth } from "../../services";
import { useHistory } from "react-router-dom";
import { Context } from "../../store";
import Cookies from "universal-cookie";

function UserInfoPage() {
  const history = useHistory();
  const navigate = (url) => {
    history.push(url);
  };

  const [addresses, setAddresses] = useState(null);
  const [orders, setOrders] = useState(null);
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    GetUserAuth().then((user) => {
      if (user == null) {
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    GetAddresses(dispatch).then((p) => {
      setAddresses(p);
    });
    if (state.user) {
      GetOrders(state.user.userId).then((p) => {
        setOrders(p);
      });
    }
  };

  const logOut = () => {
    const cookies = new Cookies();
    cookies.remove('userToken', { path: '/' });
    navigate('/');
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
            <TableHead>Suma</TableHead>
          </Col>
        </Row>
        {orders ? 
          orders.length ? (
            orders.map((o) => (
                  <OrderListItem
                    id={o.id}
                    total={o.totalPrice}
                    status={o.orderStatus}
                  />
                ))
          ) : (<Alert variant="danger">Užsakymų nėra</Alert>)
          : null}
      </div>
      <SubmitButton onClick={logOut}>
        Atsijungti
      </SubmitButton><br/><br/>
    </Container>
  );
}

export default UserInfoPage;
