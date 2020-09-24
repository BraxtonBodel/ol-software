import React from 'react';
import Login from '../screens/Login';
import UsersListScreen from '../screens/UsersList';
import UpdateProfileScreen from '../screens/UpdateProfile';
import RegisterScreen from '../screens/Register';
import { SimpleLineIcons, Entypo, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        pressColor: '#FFF',
        inactiveTintColor: '#3e3e3e',
        activeBackgroundColor: '#FF4E4E',
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
      initialRouteName="UsersListScreen"
    >
      <Tab.Screen
        name="UsersListScreen"
        component={UsersListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={24} color="black" />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="edit" size={24} color="black" />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="add-user" size={24} color="black" />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;