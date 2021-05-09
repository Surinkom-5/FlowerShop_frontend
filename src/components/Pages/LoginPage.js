import React from "react";
import styled from "styled-components";
import { BigGreenText, SmallGreenLink } from "../ui/Text";
import { GreenButton } from "../ui/Buttons";
import RegularInput from "../ui/Input";

function LoginPage(props) {
  const navigateToRegister = () => {
    props.history.push("/register");
  };
  return (
    <PageContainer>
      <BigGreenText>Prisijungti</BigGreenText>
      <InputContainer>
        <RegularInput type="text" placeholder="El. pašto adresas" />
        <VerticalSpacer />
        <RegularInput type="password" placeholder="Slaptažodis" />
        <SmallVerticalSpacer />
        <SmallGreenLink onClick={navigateToRegister}>
          Sukurti paskyrą
        </SmallGreenLink>
        <VerticalSpacer />
        <StyledGreenButton>Prisijungti</StyledGreenButton>
      </InputContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin: 0 30%;
  padding-top: 70px;
  padding-bottom: 90px;
  text-align: left;
`;

const InputContainer = styled.div`
  width: 400px;
  height: 254px;
  background-color: white;
  border-radius: 8px;
  padding: 35px;
  text-align: left;
  align-items: center;
`;

const VerticalSpacer = styled.div`
  height: 1rem;
`;

const SmallVerticalSpacer = styled.div`
  height: 0.5rem;
`;

const StyledGreenButton = styled(GreenButton)`
  margin-left: auto;
`;

export default LoginPage;
