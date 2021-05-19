import React from "react";
import { useHistory } from "react-router-dom";
import productImage from "../utils/images/product.png";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductCardSmall(props) {
  const history = useHistory();

  function navigateToProductPage(id) {
    history.push("/product/" + id);
  }

  return (
    <div
      className="product-card-small-container"
      onClick={() => navigateToProductPage(props.id)}
    >
      <img className="img-fluid" src={props.image} />
      <span className="product-card-small-title">{props.title}</span>
      <br />
      <span className="product-card-small-price">{props.price} €/vnt</span>
    </div>
  );
}

ProductCardSmall.defaultProps = {
  id: 0,
  title: "Gėlė",
  image: productImage,
  price: 0,
};

export default ProductCardSmall;
