import React from "react";
import styled from "styled-components";

function IconButton(props) {
  return (
    <Container>
      <Icon src={props.icon} />
      <Text>{props.text}</Text>
    </Container>
  );
}

const Container = styled.div`
  height: 40px;
  max-width: 90px;
  border: none;
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  align-items: center;
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }
  &:active {
    transform: translateY(1px);
  }
`;

const Text = styled.p`
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  color: black;
  padding-left: 6px;
  margin: auto;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export default IconButton;
