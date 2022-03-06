import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParamList } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'Home'>{};

const HomeScreen = ( { navigation }: Props ) => {

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>HomeScreen</Text>
      <Button 
        title="Go Section Screen"
        onPress={ () => navigation.navigate('Section') }
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 15,
      }}>
        Navigate with args
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={ { ...styles.bigButton, backgroundColor: '#5856D6'} }
          onPress={ () => navigation.navigate('Person', {
            id: 1,
            name: 'Pedro'
          })}
        >
          <Text style={ styles.bigButtonText }>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ { ...styles.bigButton, backgroundColor: '#FF9427'} }
          onPress={ () => navigation.navigate('Person', {
            id: 2,
            name: 'Maria'
          })}
        >
          <Text style={ styles.bigButtonText }>Maria</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HomeScreen;

