import React from "react";
import styled from "styled-components";
import { BigGreenText } from "../ui/Text";
import { GreenButton } from "../ui/Buttons";
import RegularInput from "../ui/Input";

function RegisterPage() {
  return (
    <PageContainer>
      <BigGreenText>Sukurti paskyrą</BigGreenText>
      <InputContainer>
        <RegularInput type="text" placeholder="El. pašto adresas" />
        <VerticalSpacer />
        <RegularInput type="password" placeholder="Slaptažodis" />
        <VerticalSpacer />
        <RegularInput type="password" placeholder="Pakartoti slaptažodį" />
        <VerticalSpacer />
        <StyledGreenButton>Sukurti paskyrą</StyledGreenButton>
      </InputContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin: 0 30%;
  padding-top: 70px;
  padding-bottom: 90px;
  height: 50vw;
  text-align: left;
`;

const InputContainer = styled.div`
  width: 400px;
  height: 321px;
  background-color: white;
  border-radius: 8px;
  padding: 35px;
  padding-top: 50px;
  text-align: left;
  align-items: center;
`;

const VerticalSpacer = styled.div`
  height: 1.5rem;
`;

const StyledGreenButton = styled(GreenButton)`
  margin-left: auto;
`;

export default RegisterPage;
