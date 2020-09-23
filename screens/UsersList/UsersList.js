import React, { useState } from 'react';
import { Image } from "react-native";
import LoginForm from '../../containers/LoginForm'
import Logo from '../../components/Iconos/Logo/Logo'

import {
    LoginContainer,
    TitleContainer,
    FormContainer,
    FooterContainer,
    Title,
    Text,
  } from './styles';

const UsersListScreen = () => {
    return (
        <LoginContainer>
        <TitleContainer>
          <Logo />
        </TitleContainer>
        <FormContainer>
          <LoginForm />
        </FormContainer>
        <FooterContainer>
          <Text>¿Olvidaste tu contraseña?</Text>
          <Text
            style={{ color: '#07a8ca' }}
          >
            Recordar contraseña
          </Text>
        </FooterContainer>
      </LoginContainer>
    );
}

export default UsersListScreen;