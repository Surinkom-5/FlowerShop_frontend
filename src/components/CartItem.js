import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import productImage from "../utils/images/product.png";
import { Row, Col } from "react-bootstrap";
import { SmallText } from "./ui/Text";
import RemoveItemIcon from "../utils/icons/RemoveItemIcon.png";

function CartItem(props) {
  return (
    <StyledRow>
      <StyledCol sm={6}>
        <Row>
          <StyledCol sm={3}>
            <Image src={props.image} />
          </StyledCol>
          <StyledCol sm={8}>
            <GreenText>{props.title}</GreenText>
            <br />
            <StyledSmallText>Prekės kodas:</StyledSmallText>
            <StyledSmallText dimmed>{props.code}</StyledSmallText>
          </StyledCol>
        </Row>
      </StyledCol>
      <StyledCol sm={3}>
        <SimpleText>{props.amount} vnt</SimpleText>
      </StyledCol>
      <StyledCol sm={2}>
        <GreenText>{props.price} €</GreenText>
      </StyledCol>
      <StyledCol sm={1}>
        <RemoveIcon src={RemoveItemIcon} />
      </StyledCol>
    </StyledRow>
  );
}

CartItem.defaultProps = {
  title: "Title",
  image: productImage,
  price: 0,
  code: "0000",
  amount: "0",
};

const GreenText = styled.span`
  font-size: 18px;
  color: #8fb56a;
  font-weight: 600;
`;

const Image = styled.img`
  width: 75px;
  height: 75px;
`;

const StyledSmallText = styled(SmallText)`
  display: inline-block;
  padding-right: 10px;
  margin-bottom: 0px;
`;

const StyledRow = styled(Row)`
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5%;
  &:hover {
    box-shadow: 0 0 2px rgba(145, 188, 106, 1);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const StyledCol = styled(Col)`
  margin: auto;
`;

const SimpleText = styled.p`
  margin-bottom: 0px;
`;

const RemoveIcon = styled.img`
  width: 20px;
  height: 20px;
  &:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
  }
  &:active {
    transform: translateY(1px);
  }
`;

export default CartItem;
