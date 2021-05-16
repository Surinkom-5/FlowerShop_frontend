import React from "react";

import productImage from "../utils/images/product.png";

import "bootstrap/dist/css/bootstrap.min.css";


class ProductCardSmall extends React.Component {
  render() {
    return (
      <div className="product-card-small-container" onClick={null /** navigate to produvt page */}>
        <img className="img-fluid" src={this.props.image} />
        <span className="product-card-small-title">{this.props.title}</span>
        <br />
        <span className="product-card-small-price">{this.props.price} €/vnt</span>
      </div>
    );
  };
}

ProductCardSmall.defaultProps = {
  title: "Gėlė",
  image: productImage,
  price: 0,
};

export default ProductCardSmall;
