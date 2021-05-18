import React, { useEffect } from "react";
import styled from "styled-components";
import { BigGreenText } from "../ui/Text";
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
      <BigGreenText>Kategorijos</BigGreenText>
      <Row>
        {/* Now showing only first six categories, later maybe do a slider? */}
        {categories.slice(0, 6).map((c) => (
          <Col xs={2}>
            <CategoryCard category={c.name} /*image={c.image}*/ />
          </Col>
        ))}
      </Row>
      <BigGreenText>Naujos gėlės</BigGreenText>
      <Row>
        {products.slice(0, 4).map((p) => (
          <Col xs={3}>
            <ProductCardSmall
              title={p.name}
              price={p.price} /*image={p.image}*/
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const StyledContainer = styled(Container)`
  min-height: 50vw;
  padding-top: 50px;
  margin: 0 auto;
  max-width: 90%;
`;

const CardContainer = styled.div`
  display: flex;
  align-content: center;
`;

const VerticalSpacer = styled.div`
  height: 1rem;
`;

const HorizontalSpacer = styled.div`
  width: 20px;
`;

const BigHorizontalSpacer = styled.div`
  width: 80px;
`;

export default HomePage;
