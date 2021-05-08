import React, { useState } from "react";
import styled from "styled-components";
import ProductCarousel from "./ProductCarousel";
import {
  ProductCardTitle,
  SmallText,
  ProductCardPrice,
  Description,
} from "./ui/Text";
import { GreenButton, CircleButton } from "./ui/Buttons";
import "./ui/styles.css";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCard(props) {
  const maxDescriptionLength = 400;

  const [amount, setAmount] = useState(0);
  const [amountCanBeIncreased, setAmountCanBeIncreased] = useState(true);

  const increaseAmount = () => {
    if (amountCanBeIncreased) {
      setAmount(amount + 1);
      if (amount + 1 == props.amount) {
        setAmountCanBeIncreased(false);
      }
    }
  };

  const decreaseAmount = () => {
    if (amount !== 0) {
      setAmount(amount - 1);
      if (!amountCanBeIncreased) {
        setAmountCanBeIncreased(true);
      }
    }
  };

  const getShortenedDescription = () => {
    return props.description.substr(0, maxDescriptionLength) + "...";
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <ProductCarousel images={props.images} height={300} width={300} />
        </Col>
        <Col sm={6}>
          <ProductCardTitle>{props.title}</ProductCardTitle>
          <Row>
            <Col>
              <StyledSmallText>Prekės kodas: </StyledSmallText>
              <StyledSmallText dimmed>{props.code}</StyledSmallText>
            </Col>
            <Col>
              <StyledSmallText>Kiekis: </StyledSmallText>
              <StyledSmallText dimmed>{props.amount} vnt</StyledSmallText>
            </Col>
          </Row>
          <ProductCardPrice>{props.price} €/vnt</ProductCardPrice>
          <Description>{getShortenedDescription()}</Description>
          <Row>
            <Col>
              <CircleButton left onClick={decreaseAmount}>
                −
              </CircleButton>
              <Text>{amount}</Text>
              <CircleButton right onClick={increaseAmount}>
                +
              </CircleButton>
            </Col>
            <Col>
              <GreenButton>Į krepšelį</GreenButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

const Text = styled.p`
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
`;

ProductCard.defaultProps = {
  title: "Prekė",
  code: NaN,
  amount: NaN,
  price: NaN,
  description: "No description provided...",
  images: null,
};

const StyledSmallText = styled(SmallText)`
  display: inline-block;
  padding-right: 10px;
`;

const Container = styled.div`
  padding: 50px 40px 50px 40px;
  background: #ffffff !important;
  border-radius: 8px;
  text-align: left;
`;

export default ProductCard;
