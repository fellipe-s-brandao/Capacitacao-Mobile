import React from "react";

import { Container, TextButton, Image } from "./styles";
export default function CardHomeScreen() {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/pt/3/30/Universo_Marvel.png";
  return (
    <Container>
      <Image source={{ uri: imageUrl }} />
      
      <TextButton>
        Herói é uma figura arquetípica, personagem modelo, que reúne, em si, os
        atributos necessários para superar, de forma excepcional, um
        determinado problema de dimensão épica.
      
        O Universo Marvel é retratado como existente dentro de um "multiverso"
        composto por milhares de universos separados, todas as quais são as
        criações da Marvel Comics e todas elas, em certo sentido, "universos
        Marvel".
      </TextButton>
     
    </Container>
  );
}
