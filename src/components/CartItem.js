import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { GetCart, GetProduct, RemoveFromCart } from "../services";

import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Context } from "../store";

function CartItem(props) {
  const [state, dispatch] = useContext(Context);
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(true);
  const cart = state.cart;

  useEffect(() => {
    GetProduct(props.id).then((p) => {
      setProduct(p);
    });
  }, []);

  useEffect(() => {
    GetProduct(props.id).then((p) => {
      setProduct(p);
    });
  }, [cart]);

  const removeProduct = (e) => {
    RemoveFromCart(props.id).then(() => {
      GetCart(dispatch);
    });
    e.preventDefault();
  };
  return (
    <div>
      {show ? (
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
          <Col xs={2} className="cart-item-row">
            <span className="cart-item-row">{props.quantity} vnt</span>
          </Col>
          <Col xs={2} className="cart-item-row">
            <b className="text-main">{product.price * props.quantity} €</b>
          </Col>
          <Col xs={2}>
            <FontAwesomeIcon
              icon={faMinusCircle}
              onClick={removeProduct}
              className="search-input-icon"
            />
          </Col>
        </Row>
      ) : null}
    </div>
  );
}

CartItem.defaultProps = {
  title: "Title",
  image: "https://dummyimage.com/500x500/d6d6d6/fff",
  price: 0,
  code: "0000",
  amount: "0",
};

export default CartItem;
