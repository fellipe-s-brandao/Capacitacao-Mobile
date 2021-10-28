import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #303134;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 90%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  border: 2px solid #12e6c8;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: #a287f4;
  border-radius: 9px;
  width: 70%;
  padding: 15px 20px;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  background-color: #12e6c8;
  border-radius: 9px;
  margin-top: 13px;
  width: 70%;
  padding: 15px 20px;
  align-items: center;
`;

export const ContainerModal = styled.Modal`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewModal = styled.View`
  align-items: center;
  background-color: #ca3a38;
  padding: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 50%;
  border-radius: 9px;
`;

export const ButtonModal = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 9px;
  margin-top: 13px;
  width: 70%;
  padding: 15px 20px;
  align-items: center;
`;


export const TextModal = styled.Text`
  color: #fff;
  font-size: 20px;
  
`;


export const TextButtonModal = styled.Text`
  color: #ca3a38;
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonOfline = styled.TouchableOpacity`
  background-color: #ca3a38;
  border-radius: 9px;
  margin-top: 13px;
  width: 70%;
  padding: 15px 20px;
  align-items: center;
`;