import React from "react";
import styled from "styled-components";
import { Header1 } from "../ui/Text";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../ProductCard";
import ProductCardSmall from "../ProductCardSmall";

function ProductPage() {
  return (
    <Container>
      <ProductCard
        title="Gėlė"
        code="010101"
        amount="20"
        price="34"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam risus, iaculis id cursus non, congue nec neque. Suspendisse purus massa, suscipit a elementum vitae, accumsan in nulla. Cras vel lectus blandit, lobortis leo vehicula, consequat magna. Sed non arcu eros."
      />
      <Header1>Panašios gėlės</Header1>
      <Row>
        <Col xs={3}>
          <ProductCardSmall title="Gėlė" price="23" />
        </Col>
        <Col xs={3}>
          <ProductCardSmall title="Gėlė" price="23" />
        </Col>
        <Col xs={3}>
          <ProductCardSmall title="Gėlė" price="23" />
        </Col>
        <Col xs={3}>
          <ProductCardSmall title="Gėlė" price="23" />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
