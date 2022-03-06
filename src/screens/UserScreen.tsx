import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any,any>{};


const UserScreen = ( { navigation }: Props ) => {

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>UserScreen</Text>
      <Button 
        title="Go back"
        onPress={ () => navigation.pop() }
      />

      <Button 
        title="Go to Home"
        onPress={ () => navigation.popToTop() }
      />
    </View>
  )
}

export default UserScreen;