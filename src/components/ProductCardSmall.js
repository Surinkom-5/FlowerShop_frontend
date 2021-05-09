import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import productImage from "../utils/images/product.png";

function ProductCardSmall(props) {
  return (
    <CardContainer onClick={null /** navigate to produvt page */}>
      <Image src={props.image} />
      <Title>{props.title}</Title>
      <br />
      <GreenText>{props.price} €/vnt</GreenText>
    </CardContainer>
  );
}

ProductCardSmall.defaultProps = {
  title: "Title",
  image: productImage,
  price: 0,
};

const CardContainer = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  font-weight: 600;
  margin-bottom: 24px;
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

const Title = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  font-weight: 600;
`;

const GreenText = styled.span`
  font-size: 18px;
  color: #8fb56a;
`;
const Image = styled.img`
  max-width: 100%;
`;

export default ProductCardSmall;
