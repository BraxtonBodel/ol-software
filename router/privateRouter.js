import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import { Button } from 'react-native'
import { SimpleLineIcons, Entypo, Feather } from '@expo/vector-icons';
import UsersListScreen from '../screens/UsersList';

const Stack = createStackNavigator();

const PrivateRoutes = () => {
  console.log('Private router')
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="TabNavigation"
      component={TabNavigation}
      options={{
        headerTitle: 'Usuarios',
        headerLeft: () => (
          <Entypo name="menu" size={24} color="black" />
        ),
      }}/>
    </Stack.Navigator>
  );
};

export default PrivateRoutes;