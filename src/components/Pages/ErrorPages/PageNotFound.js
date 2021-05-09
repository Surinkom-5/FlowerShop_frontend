import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { BigGreenText, ErrorPageText } from "../../ui/Text";

function PageNotFound() {
  return (
    <StyledContainer fluid>
      <ErrorContainer>
        <StyledBigGreenText>404</StyledBigGreenText>
        <ErrorPageText>Tokio puslapio nėra!</ErrorPageText>
      </ErrorContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  min-height: 50vw;
  padding-top: 50px;
  margin: 0 auto;
  max-width: 80%;
`;

const StyledBigGreenText = styled(BigGreenText)`
  font-size: 100px;
  margin-bottom: 0px;
`;

const ErrorContainer = styled.div`
  padding: 50px 40px 50px 40px;
  background: #ffffff !important;
  border-radius: 8px;
  text-align: left;
  margin-bottom: 3rem;
  text-align: center;
`;

export default PageNotFound;
