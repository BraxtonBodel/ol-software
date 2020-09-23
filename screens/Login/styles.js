import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const LoginContainer = styled.View`
  flex: 1;
  padding: 10px 40px;
  backgroundColor: #FFF
`;
export const TitleContainer = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;
export const FormContainer = styled.View`
  width: 100%;
`;
export const FooterContainer = styled.View`
  width: 100%;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  position: absolute;
  top: 80%;
  left: 15%;
  font-size: 20px;
  font-weight: bold;
`;
export const Text = styled.Text`
  font-size: 20px;
  text-align: justify;
`;