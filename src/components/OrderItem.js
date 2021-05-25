import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { GetProduct, RemoveFromCart } from "../services";

import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OrderItem(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    GetProduct(props.id).then((p) => {
      setProduct(p);
    });
  }, []);

  return (
    <div>
      <Row>
        <Col xs={6}>
          <Row>
            <Col xs={3}>
              <img
                className="img-fluid cart-item-image"
                src={product.image}
              ></img>
            </Col>
            <Col xs={6} className="cart-item-row-title">
              <span className="cart-item-title">{product.name}</span>
            </Col>
          </Row>
        </Col>
        <Col xs={3} className="cart-item-row">
          <span className="cart-item-row">{props.quantity} vnt</span>
        </Col>
        <Col xs={3} className="cart-item-row">
          <b className="text-main">{product.price * props.quantity} €</b>
        </Col>
      </Row>
    </div>
  );
}

OrderItem.defaultProps = {
  title: "Title",
  image: "https://dummyimage.com/500x500/d6d6d6/fff",
  price: 0,
  code: "0000",
  amount: "0",
};

export default OrderItem;
