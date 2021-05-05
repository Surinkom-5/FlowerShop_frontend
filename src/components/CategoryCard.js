import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCardSmall(props) {
  return (
    <Container>
      <Image src={props.image} />
      <Title>{props.category}</Title>
    </Container>
  );
}

const Container = styled.div`
  background: #fff;
  padding: 32px;
  text-align: center;
  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  // &:hover {
  //   box-shadow: 0 0 2px rgba(145, 188, 106, 1);
  //   transform: scale(1.05);
  //   -webkit-transform: scale(1.05);
  //   -ms-transform: scale(1.05);
  // }
  // &:active {
  //   transform: translateY(1px);
  // }
`;

const Title = styled.p`
  font-size: 16px;
  line-height: 100%;
  color: black;
  margin-bottom: 5px;
  margin-top: 3px;
`;

const Image = styled.img`
  max-width: 100%;
`;

export default ProductCardSmall;
