import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigator/StackNavigator';
// import DrawerNavigator from './src/navigator/DrawerNavigator';
import LateralMenu from './src/navigator/LateralMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <LateralMenu />
    </NavigationContainer>
  )
}

export default App;
