import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function RegularInput(props) {
  return (
    <Container>
      <Input type={props.type} placeholder={props.placeholder}></Input>
    </Container>
  );
}

const Container = styled.div`
  width: 327px;
  height: 40px;
  padding-top: 16px;
  padding-bottom: 14px;
  padding-left: 14px;
  padding-right: 26px;
  background-color: rgba(248, 248, 248, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    box-shadow: 0 0 5px rgba(143, 181, 106, 1);
  }
`;

const Input = styled.input`
  width: 287.21px;
  font-size: 12px;
  line-height: 100%;
  color: rgba(155.13, 155.13, 155.13, 1);
  background-color: rgba(248, 248, 248, 1);
  border: none;
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(155.13, 155.13, 155.13, 1);
  }
  :-ms-input-placeholder {
    color: rgba(155.13, 155.13, 155.13, 1);
  }
`;

export default RegularInput;
