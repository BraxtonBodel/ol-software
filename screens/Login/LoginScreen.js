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

const LoginScreen = () => {
    return (
        <LoginContainer>
        <TitleContainer>
          <Logo />
        </TitleContainer>
        <FormContainer>
          <LoginForm />
        </FormContainer>
        <FooterContainer>
        </FooterContainer>
      </LoginContainer>
    );
}

export default LoginScreen;