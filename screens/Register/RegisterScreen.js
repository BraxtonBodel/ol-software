import React, { Component} from 'react';
import { ScrollView, TouchableOpacity, Text,  } from 'react-native';
import RegisterForm from '../../containers/RegisterForm';
import Logo from '../../components/Iconos/Logo/Logo';
import { useNavigation } from '@react-navigation/native';

import {
    LoginContainer,
    TitleContainer,
    FormContainer,
    FooterContainer
  } from './styles';

 const RegisterScreen = () => {
      const navigation = useNavigation();
        return (
          <ScrollView>
            <LoginContainer>
            <TitleContainer>
              <Logo />
            </TitleContainer>
            <FormContainer>
              <RegisterForm />
            </FormContainer>
            <FooterContainer>
            <Text>¿Tienes cuenta?</Text>
            <TouchableOpacity
              style={{ color: '#07a8ca' }}
              onPress={() => navigation.navigate('Login')}
            >
              <Text>Log in</Text>
            </TouchableOpacity>
            </FooterContainer>
          </LoginContainer>
          </ScrollView>
        );
}

export default RegisterScreen;