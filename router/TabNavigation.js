import React from 'react';
import Login from '../screens/Login';
import UsersList from '../screens/UsersList';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        pressColor: '#FFF',
        inactiveTintColor: '#3e3e3e',
        activeBackgroundColor: '#FFF',
        activeTintColor: '#07a8ca',
        tabStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        },
        style: {
          paddingBottom: 0,
        },
      }}
      initialRouteName="Login"
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="login" size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="UsersList"
        component={UsersList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="usersList" size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;