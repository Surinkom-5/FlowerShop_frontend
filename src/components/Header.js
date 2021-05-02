import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "../utils/icons/SearchIcon.png";
import UserIcon from "../utils/icons/UserIcon.png";
import CartIcon from "../utils/icons/CartIcon.png";
import IconButton from "./ui/IconButton";

function Header(props) {
  return (
    <Container>
      <LogoText1>Gėlių</LogoText1>
      <LogoText2>Parduotuvė</LogoText2>
      <HorizontalSpacer />
      <InputContainer>
        <SearchIcon src={Icon} />
        <Input placeholder="Gėlių paieška" />
      </InputContainer>
      <HorizontalSpacer />
      <HorizontalSpacer />
      <HorizontalSpacer />
      <IconButton text="Prisijungti" icon={UserIcon} />
      <IconButton text="Prekių krepšelis" icon={CartIcon} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 29px;
  padding-bottom: 29px;
  padding-left: 142px;
  padding-right: 151px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const LogoText1 = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 100%;
  color: black;
`;

const LogoText2 = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 100%;
  color: rgba(143, 181, 106, 1);
`;

const HorizontalSpacer = styled.div`
  width: 33.12px;
`;

const InputContainer = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 2px;
  width: 30%;
  height: 35px;
  background-color: rgba(248, 248, 248, 1);
  border-radius: 8px;
  border-style: solid;
  border-width: 0.25px;
  border-style: solid;
  border-color: rgba(230.56, 230.56, 230.56, 1);
  &:hover {
    box-shadow: 0 0 5px rgba(143, 181, 106, 1);
  }
`;

const SearchIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const Input = styled.input`
  width: 80%;
  font-size: 12px;
  line-height: 100%;
  padding-left: 8px;
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
export default Header;
