import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

const LateralMenu = () => {

  return (
    <Drawer.Navigator
      drawerContent={ ( props ) => <InternalMenu { ...props }/> }
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

export default LateralMenu;

const InternalMenu = ( { navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar fragment */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://png.pngtree.com/png-vector/20210604/ourlarge/pngtree-gray-avatar-placeholder-png-image_3416697.jpg'
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Menú Options */}
      <View style={ styles.menuContainer }>

        <TouchableOpacity 
          style={ styles.menuButton }
          onPress={ () => navigation.navigate('StackNavigator') }
        >
          <Text style={ styles.menuText }>Stack Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={ styles.menuButton }
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          <Text style={ styles.menuText }>Ajustes</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
}