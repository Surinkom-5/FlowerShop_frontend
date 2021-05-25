import React, { useEffect, useState } from "react";

import { AddToCart } from "../services";
import "./ui/styles.css";
import { Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SubmitButton } from "./ui/Form";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ProductCard(props) {
  const maxDescriptionLength = 400;

  const [amount, setAmount] = useState(1);
  const [successMessage, setSuccessMessage] = useState(false);
  const [amountCanBeIncreased, setAmountCanBeIncreased] = useState(true);

  useEffect(() => {
    setAmount(1);
    setSuccessMessage(false);
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

  const addToCart = () => {
    const data = {
      productId: props.code,
      quantity: amount,
    };
    AddToCart(data);
    setSuccessMessage(true);
  };

  return (
    <div className="product-card-container">
      <Row>
        <Col sm={6}>
          {props.image ? (
            <img src={props.image} className="img-fluid" />
          ) : (
            <img src={ProductCard.defaultProps.image} className="img-fluid" />
          )}
        </Col>
        <Col sm={6}>
          <h1 className="product-card-title">{props.title}</h1>
          <Row>
            <Col xs={12} lg={6}>
              <span className="product-small-text">Prekės kodas: </span>
              <span className="product-small-text dimmed">{props.code}</span>
            </Col>
            <Col xs={12} lg={6}>
              <span className="product-small-text">Kiekis: </span>
              <span className="product-small-text dimmed">
                {props.amount} vnt
              </span>
            </Col>
          </Row>
          <h2 className="product-price">{props.price} €/vnt</h2>
          <p>{getShortenedDescription()}</p>
          {successMessage && (
            <Alert variant="success">Prekė įdėta į krepšelį</Alert>
          )}
          <Row>
            <Col xs={12} lg={6}>
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
            <Col xs={12} lg={6}>
              <SubmitButton onClick={addToCart}>Į krepšelį</SubmitButton>
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
  image: "https://dummyimage.com/500x500/d6d6d6/fff",
};

export default ProductCard;
