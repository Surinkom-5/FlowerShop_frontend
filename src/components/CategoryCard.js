import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import productImage from "../utils/images/product.png";

class CategoryCard extends React.Component {
  render() {
    return (
      <div className="category-card-container">
        <img className="img-fluid" src={this.props.image} />
        <span className="category-card-title">{this.props.category}</span>
      </div>
    );
  };
}

CategoryCard.defaultProps = {
  image: productImage,
  category: "Kategorija",
};

export default CategoryCard;
