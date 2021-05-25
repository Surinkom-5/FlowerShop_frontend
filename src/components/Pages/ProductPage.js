import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header1 } from "../ui/Text";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../ProductCard";
import ProductCardSmall from "../ProductCardSmall";
import { GetProduct, GetProductsByType } from "../../services";
import { useLocation, useParams } from "react-router";

function ProductPage() {
  const [product, setProduct] = useState({});
  const [similarProductsToShow, setSimilarProductsToShow] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [id]);

  const loadData = () => {
    GetProduct(id).then((p) => {
      setProduct(p);
      GetProductsByType(p.productType).then((products) => {
        var arr = [...products];
        arr = arr.filter((item) => item.id !== p.id);
        setSimilarProductsToShow(arr.slice(0, 4));
      });
    });
  };

  return (
    <Container>
      <ProductCard
        title={product.name}
        code={product.id}
        image={product.image}
        amount={product.quantity}
        price={product.price}
        description={product.description}
      />
      <Header1>Panašios gėlės</Header1>
      <Row>
        {similarProductsToShow.map((p) => (
          <Col lg={3} xs={12}>
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

export default ProductPage;
