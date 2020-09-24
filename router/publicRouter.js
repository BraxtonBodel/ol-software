import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import RegisterScreen from '../screens/Register';
import SplashScreen from '../screens/SplashScreen';
import UsersListScreen from '../screens/UsersList';

const Stack = createStackNavigator();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="UsersListScreen" component={UsersListScreen} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;