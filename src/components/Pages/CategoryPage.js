import React, { useEffect, useState, useContext } from "react";
import { Header1 } from "../ui/Text";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCardSmall from "../ProductCardSmall";
import "../../style.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GetProductsByType, GetCategories } from "../../services";
import { useParams } from "react-router";
import { Context } from "../../store";

function CategoryPage() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    GetCategories(dispatch);
  }, []);

  const categories = state.categories;
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
              <Col lg={3} xs={12}>
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
