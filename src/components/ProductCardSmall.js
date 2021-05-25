import React from "react";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductCardSmall(props) {
  const history = useHistory();
  const titleLength = 11;

  function navigateToProductPage(id) {
    history.push("/product/" + id);
  }

  const getShortenedTitle = () => {
    if (props.title.length <= titleLength) {
      return props.title;
    }
    return props.title.substr(0, titleLength) + "...";
  };

  return (
    <div
      className="product-card-small-container"
      onClick={() => navigateToProductPage(props.id)}
    >
      {props.image ? (
      <img className="img-fluid" src={props.image} />
      ) : (
        <img className="img-fluid" src={ProductCardSmall.defaultProps.image} />
      )}
      <span className="product-card-small-title">{getShortenedTitle()}</span>
      <br />
      <span className="product-card-small-price">{props.price} €/vnt</span>
    </div>
  );
}

ProductCardSmall.defaultProps = {
  id: 0,
  title: "Gėlė",
  image: 'https://dummyimage.com/200x200/d6d6d6/fff',
  price: 0,
};

export default ProductCardSmall;
