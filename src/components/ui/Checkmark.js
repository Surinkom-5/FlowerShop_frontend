import React from "react";
import styled, { keyframes, css } from "styled-components";

export default function Checkmark(props) {
  return (
    <Label
      htmlFor={props.id}
      disabled={props.disabled}
      smallLabel={props.smallLabel}
    >
      {props.label}
      <Input
        id={props.id}
        type="checkbox"
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        checked={props.checked}
        onChange={props.onChange}
      />
      <Indicator />
    </Label>
  );
}

Checkmark.defaultProps = {
  value: false,
  checked: false,
  onChange: null,
  name: "",
  id: null,
  label: "",
  disabled: false,
  smallLabel: false,
};

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  display: inline;
  color: rgba(155.13, 155.13, 155.13, 1);
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: ${(props) => (props.smallLabel ? "12px" : "16px")};
  margin: 0.6em 1em;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: none;
  border-radius: 0.2em;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Label}:hover & {
    background: #ccc;
    // background-color: rgba(145, 188, 106, 1);
    box-shadow: 0 0 2px rgba(145, 188, 106, 1);
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid #263238;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;
