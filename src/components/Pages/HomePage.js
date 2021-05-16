import React from "react";
import styled from "styled-components";
import { Header1 } from "../ui/Text";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCarousel from "../ProductCarousel";
import ProductCardSmall from "../ProductCardSmall";
import CategoryCard from "../CategoryCard";
import "../../style.css";
import productImage from "../../utils/images/product.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
  return (
    <Container>
      <ProductCarousel height={400} className="carousel" />
      <Header1 className="text-center">Kategorijos</Header1>
      <Row>
        <Col xs={2}>
          <CategoryCard />
        </Col>
        <Col xs={2}>
          <CategoryCard />
        </Col>
        <Col xs={2}>
          <CategoryCard />
        </Col>
        <Col xs={2}>
          <CategoryCard />
        </Col>
        <Col xs={2}>
          <CategoryCard />
        </Col>
        <Col xs={2}>
          <CategoryCard />
        </Col>
      </Row>
      <Header1>Naujos gėlės</Header1>
      <Row>
        <Col xs={3}>
          <ProductCardSmall title="Product 1" price="23" />
        </Col>
        <Col xs={3}>
          <ProductCardSmall title="Product 1" />
        </Col>
        <Col xs={3}>
          <ProductCardSmall title="Product 1" price="23" />
        </Col>
        <Col xs={3}>
          <ProductCardSmall title="Product 1" price="23" />
        </Col>
      </Row>
    </Container>
    
  );
}

export default HomePage;
