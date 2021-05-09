import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { GreenButton } from "./ui/Buttons";
import { SimpleText } from "./ui/Text";

function AdressCard(props) {
  return (
    <CardContainer>
      <SimpleText>
        {props.name} {props.surname}
      </SimpleText>
      <SimpleText>
        {props.adress}, {props.city}
      </SimpleText>
      <SimpleText>{props.code}</SimpleText>
      <UnderlinedText>{props.emailAdress}</UnderlinedText>
      <SimpleText>{props.phoneNumber}</SimpleText>
      <VerticalSpacer />
      <GreenButton>Keisti</GreenButton>
    </CardContainer>
  );
}

AdressCard.defaultProps = {
  name: "Vardas",
  surname: "Pavardė",
  adress: "Adresas",
  city: "Miestas",
  code: "00000",
  emailAdress: "mail@mail.com",
  phoneNumber: "00000000000",
};

const CardContainer = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  font-weight: 600;
  margin-bottom: 24px;
  width: 250px;
`;

const VerticalSpacer = styled.div`
  height: 1rem;
`;

const UnderlinedText = styled(SimpleText)`
  text-decoration: underline;
`;

export default AdressCard;
