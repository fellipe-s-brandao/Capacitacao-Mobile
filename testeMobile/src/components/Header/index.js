import React from "react";
import { Image } from "react-native";

import { Container,TextWelcome, AvatarImage } from "./styles";

import Logo from "../../assets/avatar.png";

export default function Header(props) {
  const  {nameUser} = props;
  return (
    <Container>
      <AvatarImage source={Logo} />
      <TextWelcome>Bem vindo {nameUser}</TextWelcome>
    </Container>
  );
}
