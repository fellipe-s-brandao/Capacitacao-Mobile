import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonLogin,
  TextButton,
  ButtonSignUp,
  ContainerModal,
  ViewModal,
  ButtonModal,
  TextModal,
  TextButtonModal,
  ButtonOfline
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../services/api";

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  async function handleSignIn(props) {
    await api
      .post("signin", {
        email: email,
        password: password,
      })
      .then(async (res) => {
        try {
          await AsyncStorage.setItem("token", res.data.token);
          props.navigation.navigate("Home");
        } catch (e) {
          console.log("erro", e);
        }
      })
      .catch((err) => {
        console.log("err ", err);
        setModalVisible(true);
        setModalText(
          "Erro: verifique se todos os campos estão preenchidos corretamente"
        );
      });
  }

  return (
    <>
      <ContainerModal
        animationType="slide"
        visible={modalVisible}
        style={{}}
        transparent={true}
      >
        <ViewModal>
          <TextModal>{modalText}</TextModal>
          <ButtonModal onPress={() => setModalVisible(false)}>
            <TextButtonModal>Fechar</TextButtonModal>
          </ButtonModal>
        </ViewModal>
      </ContainerModal>

      <KeyboardView>
        <Container>
          <Title>Login</Title>

          <Input
            placeholderTextColor="#fff"
            placeholder="E-mail"
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
          <Input
            placeholderTextColor="#fff"
            placeholder="Senha"
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
            value={password}
          />
          <ButtonLogin onPress={() => handleSignIn(props)}>
            <TextButton>Entrar</TextButton>
          </ButtonLogin>

          <ButtonSignUp
            onPress={() => {
              props.navigation.push("Cadastro", { titulo: "Tela de cadastro" });
            }}
          >
            <TextButton>Cadstre-se</TextButton>
          </ButtonSignUp>

          <ButtonOfline
            onPress={() => {
              props.navigation.push("Home", { titulo: "Tela Inicial" });
            }}
          >
            <TextButton>Modo ofline</TextButton>
          </ButtonOfline>
        </Container>
      </KeyboardView>
    </>
  );
}
