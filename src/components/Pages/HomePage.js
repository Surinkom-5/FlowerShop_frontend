import React from "react";
import styled from "styled-components";
import { BigGreenText } from "../ui/Text";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCarousel from "../ProductCarousel";
import ProductCardSmall from "../ProductCardSmall";
import CategoryCard from "../CategoryCard";

function HomePage() {
  return (
    <StyledContainer fluid>
      <ProductCarousel height={400} />
      <VerticalSpacer />
      <VerticalSpacer />
      <BigGreenText>Kategorijos</BigGreenText>
      {/* Veliau padaryti kad iteruoti per kategorijas ir kiekvienai kategorijai uzsetinti Caregory card */}
      <CardContainer>
        <VerticalSpacer />
        <CategoryCard
          category="Kategorija"
          image="https://www.thespruce.com/thmb/9wSFip9fQEtqRa0A05x6zOvW2FY=/2848x2848/smart/filters:no_upscale()/pictures-of-orange-flowers-4061768-hero-af9e809318964fbcae6e922aa3cc8182.JPG"
        />
        <HorizontalSpacer />
        <CategoryCard
          category="Kategorija"
          image="https://www.thespruce.com/thmb/9wSFip9fQEtqRa0A05x6zOvW2FY=/2848x2848/smart/filters:no_upscale()/pictures-of-orange-flowers-4061768-hero-af9e809318964fbcae6e922aa3cc8182.JPG"
        />
        <HorizontalSpacer />
        <CategoryCard
          category="Kategorija"
          image="https://www.thespruce.com/thmb/9wSFip9fQEtqRa0A05x6zOvW2FY=/2848x2848/smart/filters:no_upscale()/pictures-of-orange-flowers-4061768-hero-af9e809318964fbcae6e922aa3cc8182.JPG"
        />
        <HorizontalSpacer />
        <CategoryCard
          category="Kategorija"
          image="https://www.thespruce.com/thmb/9wSFip9fQEtqRa0A05x6zOvW2FY=/2848x2848/smart/filters:no_upscale()/pictures-of-orange-flowers-4061768-hero-af9e809318964fbcae6e922aa3cc8182.JPG"
        />
        <HorizontalSpacer />
        <CategoryCard
          category="Kategorija"
          image="https://www.thespruce.com/thmb/9wSFip9fQEtqRa0A05x6zOvW2FY=/2848x2848/smart/filters:no_upscale()/pictures-of-orange-flowers-4061768-hero-af9e809318964fbcae6e922aa3cc8182.JPG"
        />
      </CardContainer>
      <VerticalSpacer />
      <VerticalSpacer />
      <BigGreenText>Naujausios gėlės</BigGreenText>
      <VerticalSpacer />
      <CardContainer>
        <ProductCardSmall title="Product 1" price="23" />
        <BigHorizontalSpacer />
        <ProductCardSmall title="Product 2" price="2" />
        <BigHorizontalSpacer />
        <ProductCardSmall title="Product 3" price="14" />
      </CardContainer>
      <VerticalSpacer />
      <VerticalSpacer />
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  min-height: 50vw;
  padding-top: 50px;
  margin: 0 auto;
  max-width: 90%;
`;

const CardContainer = styled.div`
  display: flex;
  align-content: center;
`;

const VerticalSpacer = styled.div`
  height: 1rem;
`;

const HorizontalSpacer = styled.div`
  width: 20px;
`;

const BigHorizontalSpacer = styled.div`
  width: 80px;
`;

export default HomePage;
