/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Basic from './src/screens/Basic';
import Animation from './src/screens/Animation';
import Feathericons from 'react-native-vector-icons/Feather';
import {ToastProvider} from './src/context/ToastContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ToastProvider>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Basic') {
                iconName = focused ? 'codepen' : 'codesandbox';
              } else if (route.name === 'Animation') {
                iconName = focused ? 'dribbble' : 'droplet';
              }
              return <Feathericons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Basic" component={Basic} />
          <Tab.Screen name="Animation" component={Animation} />
        </Tab.Navigator>
      </ToastProvider>
    </NavigationContainer>
  );
};


export default App;
