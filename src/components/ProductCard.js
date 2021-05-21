import React, { useEffect, useState } from "react";
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
import { TextInput, SubmitButton, QuantityInput } from "./ui/Form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import productImage from "../utils/images/product.png";

function ProductCard(props) {
  const maxDescriptionLength = 400;

  const [amount, setAmount] = useState(0);
  const [amountCanBeIncreased, setAmountCanBeIncreased] = useState(true);

  useEffect(() => {
    setAmount(0);
  }, [props.amount]);

  const increaseAmount = () => {
    if (props.amount === 0) {
      return;
    }
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
    <div className="product-card-container">
      <Row>
        <Col sm={6}>
          <img src={productImage} className="img-fluid" />
        </Col>
        <Col sm={6}>
          <h1 className="product-card-title">{props.title}</h1>
          <Row>
            <Col>
              <span className="product-small-text">Prekės kodas: </span>
              <span className="product-small-text dimmed">{props.code}</span>
            </Col>
            <Col>
              <span className="product-small-text">Kiekis: </span>
              <span className="product-small-text dimmed">
                {props.amount} vnt
              </span>
            </Col>
          </Row>
          <h2 className="product-price">{props.price} €/vnt</h2>
          <p>{getShortenedDescription()}</p>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <button
                    type="submit"
                    className="btn quantity-button"
                    onClick={decreaseAmount}
                  >
                    -
                  </button>
                </InputGroup.Prepend>
                <Form.Control
                  className="quantity-input"
                  plaintext
                  readOnly
                  defaultValue="1"
                  name="quantity"
                  value={amount}
                />
                <InputGroup.Append>
                  <button
                    type="submit"
                    className="btn quantity-button"
                    onClick={increaseAmount}
                  >
                    +
                  </button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <SubmitButton>Į krepšelį</SubmitButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

ProductCard.defaultProps = {
  title: "Prekė",
  code: NaN,
  amount: NaN,
  price: NaN,
  description: "No description provided...",
  images: null,
};

export default ProductCard;
