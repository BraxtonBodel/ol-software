import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import PrivateRoutes from './privateRouter';
import PublicRoutes from './publicRouter';
import * as firebase from 'firebase';
import { set } from 'react-native-reanimated';

const Router = () => {
  const [session, setSession] = useState()
  firebase.auth().onAuthStateChanged(user =>{
    user ? setSession(true): setSession(false)
  })
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: '#FFF' },
      }}
    >
      <StatusBar barStyle="light-content" />
      {session ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default Router;