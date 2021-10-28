import React, { useEffect } from "react";
import { Text, ActivityIndicator } from "react-native";
import { Container } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp(props) {
  const detectedLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      props.navigation.replace("Home");
    } else {
      props.navigation.replace("Login");
    }
  };
  useEffect(() => {
    detectedLogin();
  }, []);
  return (
    <Container>
      <ActivityIndicator size="large" color="white" />
    </Container>
  );
}
