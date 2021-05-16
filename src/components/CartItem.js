import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import productImage from "../utils/images/product.png";
import { Row, Col } from "react-bootstrap";
import { SmallText } from "./ui/Text";
import RemoveItemIcon from "../utils/icons/RemoveItemIcon.png";

import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartItem(props) {
  return (
    <Row>
      <Col xs={6}>
        <Row>
        <Col xs={3}>
          <img className="img-fluid cart-item-image" src={props.image}></img>
        </Col>
        <Col xs={6} className="cart-item-row-title">
          <span className="cart-item-title">
          {props.title}
          </span>
        </Col>
        </Row>
            </Col>
            <Col xs={2} className="cart-item-row">
            <span className="cart-item-row">{props.amount} vnt</span>
            </Col>
            <Col xs={2} className="cart-item-row">
            <b className="text-main">{props.price} €</b>
            </Col>
            <Col xs={2}>
              <FontAwesomeIcon icon={faMinusCircle} className="search-input-icon" />
            </Col>
    </Row>
  );
}

CartItem.defaultProps = {
  title: "Title",
  image: productImage,
  price: 0,
  code: "0000",
  amount: "0",
};

export default CartItem;
