import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

/* 
interface RouterParams {
  id: number;
  name: string;
} 
*/

interface Props extends StackScreenProps<RootStackParamList, 'Person'>{};

const PersonScreen = ({ route, navigation }: Props) => {

  // const params = route.params as RouterParams;
  const params = route.params;

  useEffect(() => {

    navigation.setOptions({
      title: params.name
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin}>
      <Text style={ styles.title }>
        {
          JSON.stringify( params, null, 3 )
        }
      </Text>
    </View>
  )
}

export default PersonScreen;