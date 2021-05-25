import React, { useEffect, useContext } from "react";
import { Header1 } from "../ui/Text";
import ProductCardSmall from "../ProductCardSmall";
import CategoryCard from "../CategoryCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GetCategories, GetProducts, GetUser } from "../../services";
import { Context } from "../../store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

function HomePage() {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    GetUser(dispatch);
    GetProducts(dispatch);
    GetCategories(dispatch);
  }, []);

  const products = state.products;
  const categories = state.categories;

  return (
    <Container>
      <Header1 className="text-center">Kategorijos</Header1>
      <Row>
        {categories.slice(0, 6).map((c) => (
          <Col lg={2} xs={12}>
            <CategoryCard id={c.id} category={c.name} image={c.image} />
          </Col>
        ))}
      </Row>
      <Header1>Naujos gėlės</Header1>
      <Row>
        {products.slice(0, 4).map((p) => (
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

export default HomePage;
