import styled from "styled-components";

export const ProductCardTitle = styled.p`
  font-size: 36px;
  font-weight: 500;
  line-height: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-bottom: 5px;
  color: rgba(143, 181, 106, 1);
`;

export const Description = styled.p`
  width: 484px;
  font-size: 16px;
  font-weight: 300;
  line-height: 100%;
  color: rgba(122.19, 122.19, 122.19, 1);
  max-width: 100%;
`;

export const ProductCardPrice = styled.p`
  font-size: 24px;
  line-height: 100%;
  font-weight: 600;
  color: black;
`;

export const SmallText = styled.p`
  font-size: 14px;
  line-height: 100%;
  font-weight: 500;
  color: ${(props) => (props.dimmed ? "#AAAAAA" : "#000000")};
`;

export const BigGreenText = styled.p`
  font-size: 32px;
  margin: 16px 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: rgba(143, 181, 106, 1);
`;

// TODO: change to link
export const SmallGreenLink = styled.p`
  font-size: 12px;
  line-height: 100%;
  color: rgba(143, 181, 106, 1);
  margin: auto;
  &:hover {
    color: green;
  }
`;

export const SmallGreenText = styled.p`
  font-size: 12px;
  line-height: 100%;
  color: rgba(143, 181, 106, 1);
  margin: auto;
`;

export const ErrorPageText = styled.p`
  font-size: 36px;
  line-height: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-bottom: 5px;
  color: rgba(122.19, 122.19, 122.19, 1);
  opacity: 80%;
`;

export const SimpleText = styled.p`
  margin-bottom: 0px;
  font-weight: 400;
`;
