import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import PrivateRoutes from './privateRouter';
import PublicRoutes from './publicRouter';

const Router = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: '#FFF' },
      }}
    >
      <StatusBar barStyle="light-content" />
      {false ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default Router;