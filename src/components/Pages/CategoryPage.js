import React, { useEffect, useState } from "react";
import { Header1 } from "../ui/Text";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCardSmall from "../ProductCardSmall";
import "../../style.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { GetProductsByType } from "../../services";
import { useParams } from "react-router";

function CategoryPage() {
  const categories = useSelector((state) => state.appReducer.categories);
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState(null);
  const { id } = useParams();

  const getCategoryProducts = (category) => {
    if (!category) {
      return;
    }
    GetProductsByType(category.id).then((products) => {
      setCategoryProducts(products);
    });
  };

  useEffect(() => {
    const c = categories.find((c) => c.id == id);
    setCategory(c);
    getCategoryProducts(c);
  }, [categories]);

  return (
    <Container>
      <Header1 className="text-center">
        {category ? category.name : null}
      </Header1>
      <Row>
        {categoryProducts
          ? categoryProducts.map((p) => (
              <Col xs={3}>
                <ProductCardSmall
                  id={p.id}
                  title={p.name}
                  price={p.price}
                  image={p.image}
                />
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
}

export default CategoryPage;
