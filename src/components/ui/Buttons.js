import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const AmountButton = () => {
  return (
    <div
      class="btn-group"
      role="group"
      aria-label="Basic example"
      style={{
        height: "30px",
        textAlign: "center",
      }}
    >
      <button
        type="button"
        style={{
          textAlign: "center",
          background: "#F8F8F8",
          border: "hidden",
          color: "black",
          fontSize: "20px",
          padding: "5px",
          borderRadius: "8px 0px 0px 8px",
        }}
      >
        –
      </button>
      <button
        type="button"
        class="btn btn"
        style={{
          color: "black",
        }}
        disabled
      >
        0
      </button>
      <button
        type="button"
        style={{
          background: "#F8F8F8",
          border: "hidden",
          color: "black",
          fontSize: "20px",
          padding: "5px",
          borderRadius: "0px 8px 8px 0px",
          onHover: { color: "red" },
        }}
      >
        +
      </button>
    </div>
  );
};

export const GreenButton = styled.button`
  padding-top: 6px;
  padding-bottom: 5px;
  padding-left: 25px;
  padding-right: 24px;
  background-color: rgba(143, 181, 106, 1);
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  color: white;
  border-color: rgba(143, 181, 106, 1);
  &:hover {
    background-color: rgba(145, 188, 106, 1);
    box-shadow: 0 0 2px rgba(145, 188, 106, 1);
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }
  &:active {
    transform: translateY(1px);
  }
`;
