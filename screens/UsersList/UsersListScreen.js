import React, { useState } from 'react';
import { TouchableOpacity, View } from "react-native";
import  UsersListContainer  from '../../containers/UsersList';
import * as firebase from 'firebase';

import {
    LoginContainer,
    TitleContainer,
    FormContainer,
    FooterContainer,
    Title,
    Text,
  } from './styles';

const UsersListScreen = () => {
  const currentUser = firebase.auth().currentUser
  const signOut = () =>{
    firebase.auth().signOut()
  }
  const handleLogOut = () => {
    firebase.auth().signOut().then(() => console.log('Ol-Software se despide.'))
  }
  
  return (
      <View>
        <UsersListContainer />
      <TouchableOpacity onPress={handleLogOut}>
        <Text>Cerrar Sesion</Text>
      </TouchableOpacity>
      </View>
  );
}

export default UsersListScreen;