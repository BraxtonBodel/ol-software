import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import UsersList from '../screens/UsersList';

const Stack = createStackNavigator();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="UsersListRender" component={UsersList} />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;