import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

const SectionScreen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>SectionScreen</Text>
      <Button 
        title="Go User Screen"
        onPress={ () => navigator.navigate( 'User' as never ) }
      />
    </View>
  )
}

export default SectionScreen;

