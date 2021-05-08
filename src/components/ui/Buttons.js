import React from "react";
import styled from "styled-components";

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

export const CircleButton = styled.circle`
  height: 25px;
  width: 25px;
  background-color: #aaaaaa;
  display: inline-block;
  text-align: center;
  opacity: 80%;
  border-radius: ${(props) => {
    if (props.left) {
      return "50% 0 0 50%";
    } else if (props.right) {
      return "0 50% 50% 0";
    } else {
      return "50%";
    }
  }};
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
  &:hover {
    background-color: rgba(145, 188, 106, 1);
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }
  &:active {
    transform: translateY(1px);
  }
`;
