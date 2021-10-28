import styled from "styled-components/native";
import { Dimensions } from "react-native"; 
const { width } = Dimensions.get("window");

export const Container = styled.View`
  background-color: #3959A2;
  flex: 1;
  margin: 40px 10px 20px;
  border-radius: 12px;
  height: ${width}px;
  width: 94%;
  padding: 20px;
  align-items: center;
`;

export const TextButton = styled.Text`
top: -60;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const Image = styled.Image`
  top: -50;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 25px;
`;