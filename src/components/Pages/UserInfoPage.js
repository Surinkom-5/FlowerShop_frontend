import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { BigGreenText, SimpleText } from "../ui/Text";
import { GreenButton } from "../ui/Buttons";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import AddressCard from "../AddressCard";
import OrderListItem from "../OrderListItem";
import { Header1Center } from "../ui/Text";
import { TableHead } from "../ui/Text";
import {TextInput,SubmitButton} from "../ui/Form";
import { GetCategories, GetProducts, GetCart, GetUser, GetAddresses } from "../../services";
import { useHistory, useLocation } from "react-router-dom";


function UserInfoPage() {
  const history = useHistory();
  const navigate = (url) => {
    history.push(url);
  };
  const [addresses, setAddresses] = useState({});
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    // get addresses
    GetAddresses().then((p) => {
      setAddresses(p);
    });
  };
  return (
    <Container>
      <Header1Center>Adresai</Header1Center>
      <Row>
      {/* {addresses ? (addresses.map((c) => (
          <Col xs={2}>
            <AddressCard/>
          </Col>
        ))) : null} */}
      </Row>
      <SubmitButton onClick={() => navigate("/create-address")}>Naujas adresas</SubmitButton>
      <Header1Center>Užsakymai</Header1Center>

      <div className="orders-container">
        <Row className="table-head-container">
            <Col sm={3}>
              <TableHead>Užsakymas</TableHead>
            </Col>
            <Col sm={3}>
              <TableHead>Data</TableHead>
            </Col>
            <Col sm={3}>
              <TableHead>Kiekis</TableHead>
            </Col>
            <Col sm={3}>
              <TableHead>Suma</TableHead>
            </Col>
        </Row>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
      </div>
      
    </Container>
  );
}

export default UserInfoPage;
