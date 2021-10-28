import React, { useEffect, useState } from "react";
import { ButtonLogin, TextButton, Container, TextList, View } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";

import api from "../../services/api";

import Header from "../../components/Header";
import CarrouselItem from "../../components/CarrouselItem";
import CardHomeScreen from "../../components/CardHomeScreen";

export default function SignIn(props) {
  const [name, setName] = useState("Usuário ofline");

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    await api
      .get("/", { headers: { Authorization: "Bearer " + token } })
      .then(async (res) => {
        try {
          setName(res.data.name);
        } catch (e) {
          console.log("erro", e);
        }
      })
      .catch((err) => {
        console.log("err ", err);
      });
  }, []);

  async function handleLogout(props) {
    await AsyncStorage.removeItem("token").then(() => {
      props.navigation.replace("Login");
    });
  }

  const data = ["#ED382A", "#71AB59", "#3959A2"];
  return (
    <Container>
      <Header nameUser={name} />
      <ScrollView>
        <View>
          <TextList>Lista de Heróis</TextList>
          <CarrouselItem data={data} />
          <CardHomeScreen />
          <ButtonLogin onPress={() => handleLogout(props)}>
            <TextButton>Sair</TextButton>
          </ButtonLogin>
        </View>
      </ScrollView>
    </Container>
  );
}
