import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #303134;
  flex: 1;
`;

export const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: #ca3a38;
  border-radius: 9px;
  width: 70%;
  padding: 15px 20px;
  align-items: center;
  margin: 20px 0 ;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const TextList = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 0 15px 15px;
`;
