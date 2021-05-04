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
  width: 200px;
  height: 125px;
  padding-top: 19px;
  padding-bottom: 16px;
  padding-left: 62px;
  padding-right: 63px;
  background-color: white;
  border-radius: 8px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 16px;
  line-height: 100%;
  color: black;
  margin-bottom: 5px;
  margin-top: 3px;
`;

const Image = styled.img`
  width: 75px;
  height: 65px;
  margin-top: 20px;
`;

export default ProductCardSmall;
