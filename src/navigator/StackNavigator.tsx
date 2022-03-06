import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import UserScreen from '../screens/UserScreen';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParamList = {
  Home: undefined;
  Section: undefined;
  User: undefined;
  Person: {
    id: number,
    name: string,
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (   
    <Stack.Navigator
      screenOptions={{ 
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
      }}}
    >
      <Stack.Screen name="Home" options={{ title:"Página 1" }} component={ HomeScreen } />
      <Stack.Screen name="Section" options={{ title:"Página 2" }} component={ SectionScreen } />
      <Stack.Screen name="User" options={{ title:"Página 3" }} component={ UserScreen } />
      <Stack.Screen name="Person" options={{ title:"Página 4" }} component={ PersonScreen } />
    </Stack.Navigator>
  )
};

export default StackNavigator;