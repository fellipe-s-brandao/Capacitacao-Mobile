import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonReturn,
  TextButton,
  ButtonSignUp,
  ContainerModal,
  ViewModal,
  ButtonModal,
  TextModal,
  TextButtonModal
} from "./styles";

import api from "../../services/api";

export default function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  async function handleSignUp(props) {
    await api
      .post("signup", {
        email: email,
        name: name,
        password: password,
      })
      .then(async (res) => {
        console.log("sucesso");
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
        <Title>Cadastre-se</Title>
        <Input
          placeholderTextColor="#fff"
          placeholder="Nome"
          onChangeText={(value) => setName(value)}
          value={name}
        />
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

        <ButtonSignUp onPress={() => handleSignUp(props)}>
          <TextButton>Cadstre-se</TextButton>
        </ButtonSignUp>

        <ButtonReturn
          onPress={() => {
            props.navigation.replace("Login");
          }}
        >
          <TextButton>Voltar</TextButton>
        </ButtonReturn>
      </Container>
    </KeyboardView>
    </>
  );
}
