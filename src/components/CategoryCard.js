import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import productImage from "../utils/images/product.png";
import { useHistory } from "react-router";

function CategoryCard(props) {
  const history = useHistory();
  const navigateToProductPage = (id) => {
    history.push("/category/" + id);
  };

  return (
    <div
      className="category-card-container"
      onClick={() => navigateToProductPage(props.id)}
    >
      <img className="img-fluid" src={props.image} />
      <span className="category-card-title">{props.category}</span>
    </div>
  );
}

CategoryCard.defaultProps = {
  id: 0,
  image: productImage,
  category: "Kategorija",
};

export default CategoryCard;
