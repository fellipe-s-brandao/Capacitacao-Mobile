import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Card = styled.TouchableOpacity`
  padding: 50px;
  background-color: ${(props) =>
    props.color};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
  margin-bottom: 20px;
  height: ${width / 2.6}px;
  width: ${width*0.9}px;
  margin: 0 10px;
`;

export const TextCard = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: 700;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;


export const ContainerModal = styled.Modal`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewModal = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${(props) =>
    props.color};
  padding: 30px;
  margin: 50px 10px;
  border-radius: 9px;
`;

export const ButtonModal = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 9px;
  margin-top: 25px;
  width: 70%;
  padding: 15px 20px;
  align-items: center;
`;


export const TextModal = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight:700;
  margin-bottom: 25px;
`;

export const TextDescriptionModal = styled.Text`
  color: #fff;
  font-size: 22px;
  text-align: justify;
`;

export const AvatarModal = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 25px;
`;

export const TextButtonModal = styled.Text`
  color: #ca3a38;
  font-size: 20px;
  font-weight: bold;
`;
