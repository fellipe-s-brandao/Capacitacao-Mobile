import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Stack from "./src/routes/Stack";

export default function App() {
 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Stack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303134",
  },
});
