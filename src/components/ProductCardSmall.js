import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCardSmall(props) {
  return (
    <Container>
      <img
        width={250}
        height={250}
        src="https://www.thespruce.com/thmb/9wSFip9fQEtqRa0A05x6zOvW2FY=/2848x2848/smart/filters:no_upscale()/pictures-of-orange-flowers-4061768-hero-af9e809318964fbcae6e922aa3cc8182.JPG"
      />
      <Title>{props.title}</Title>
      <GreenText>{props.price} €/vnt</GreenText>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 365px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 26px;
  padding-bottom: 19px;
  background-color: white;
  border-radius: 8px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  &:hover {
    box-shadow: 0 0 2px rgba(145, 188, 106, 1);
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const Title = styled.p`
  font-size: 20px;
  line-height: 100%;
  color: black;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const GreenText = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 10px;
  color: rgba(143, 181, 106, 1);
`;

export default ProductCardSmall;
