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
  const [similarProducts, setSimilarProducts] = useState([]);
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
    // get product
    GetProduct(id).then((p) => {
      setProduct(p);
      // get similar products
      GetProductsByType(p.productType).then((products) => {
        setSimilarProducts(products);
        var arr = [...products];
        arr = arr.filter((item) => item.id !== p.id);
        arr.slice(0, 4);
        setSimilarProductsToShow(arr);
      });
    });
  };

  return (
    <Container>
      <ProductCard
        title={product.name}
        code={product.id}
        amount={product.quantity}
        price={product.price}
        description={product.description}
      />
      <Header1>Panašios gėlės</Header1>
      <Row>
        {similarProductsToShow.map((p) => (
          <Col xs={3}>
            <ProductCardSmall id={p.id} title={p.name} price={p.price} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductPage;
