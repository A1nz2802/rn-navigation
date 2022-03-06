import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator screenOptions={{
      drawerType: width >= 600 ? 'permanent' : 'front'
    }}>
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home'}} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings'}} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;