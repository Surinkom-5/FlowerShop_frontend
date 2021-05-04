import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCarousel(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          width={props.width}
          height={props.height}
          className="d-block w-100"
          src="https://www.legacy.com/wp-content/uploads/2020/01/Sympathy-flowers-orange-1000-shutterstock_694680475-1200x900.jpg"
          alt="First slide"
        />
      </Carousel.Item>{" "}
      <Carousel.Item>
        <img
          width={props.width}
          height={props.height}
          className="d-block w-100"
          src="https://www.thoughtco.com/thmb/mik7Z00SAYN786BQbieXWOzZmc8=/2121x1414/filters:fill(auto,1)/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg"
          alt="First slide"
        />
      </Carousel.Item>{" "}
    </Carousel>
  );
}

export default ProductCarousel;
