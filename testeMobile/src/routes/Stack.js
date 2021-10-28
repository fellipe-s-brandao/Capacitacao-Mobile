import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Loading from "../views/Loading";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import HomeScreen from "../views/HomeScreen";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="Cadastro" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
