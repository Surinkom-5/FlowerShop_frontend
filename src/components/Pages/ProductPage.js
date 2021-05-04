import React from "react";
import styled from "styled-components";
import { BigGreenText } from "../ui/Text";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../ProductCard";
import ProductCardSmall from "../ProductCardSmall";

function ProductPage() {
  return (
    <StyledContainer fluid>
      <ProductCard
        title="Product"
        code="010101"
        amount="20"
        price="34"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam risus, iaculis id cursus non, congue nec neque. Suspendisse purus massa, suscipit a elementum vitae, accumsan in nulla. Cras vel lectus blandit, lobortis leo vehicula, consequat magna. Sed non arcu eros."
      />
      <VerticalSpacer />
      <VerticalSpacer />
      <StyledBigGreenText>Panašios gėlės</StyledBigGreenText>
      <VerticalSpacer />
      <CardSliderContainer>
        <ProductCardSmall title="Product 1" price="23" />
        <HorizontalSpacer />
        <ProductCardSmall title="Product 2" price="2" />
        <HorizontalSpacer />
        <ProductCardSmall title="Product 3" price="14" />
      </CardSliderContainer>
      <VerticalSpacer />
      <VerticalSpacer />
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
  self-align: auto;
`;

const CardSliderContainer = styled.div`
  display: flex;
`;

const VerticalSpacer = styled.div`
  height: 1rem;
`;

const HorizontalSpacer = styled.div`
  width: 40px;
`;

export default ProductPage;
