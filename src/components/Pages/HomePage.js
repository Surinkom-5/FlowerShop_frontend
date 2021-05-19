import React, { useEffect } from "react";
import styled from "styled-components";
import { Header1 } from "../ui/Text";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCarousel from "../ProductCarousel";
import ProductCardSmall from "../ProductCardSmall";
import CategoryCard from "../CategoryCard";
import "../../style.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { GetCategories, GetProducts } from "../../services";

function HomePage() {
  const products = useSelector((state) => state.appReducer.products);
  const categories = useSelector((state) => state.appReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    GetProducts(dispatch);
    GetCategories(dispatch);
  }, []);

  return (
    <Container>
      <ProductCarousel height={400} className="carousel" />
      <Header1 className="text-center">Kategorijos</Header1>
      <Row>
        {/* Now showing only first six categories, later maybe do a slider? */}
        {categories.slice(0, 6).map((c) => (
          <Col xs={2}>
            <CategoryCard category={c.name} /*image={c.image}*/ />
          </Col>
        ))}
      </Row>
      <Header1>Naujos gėlės</Header1>
      <Row>
        {products.slice(0, 4).map((p) => (
          <Col xs={3}>
            <ProductCardSmall
              id={p.id}
              title={p.name}
              price={p.price}
              image={p.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
