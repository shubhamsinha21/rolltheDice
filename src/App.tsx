import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import One from '../assets/one.png' 
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImages} source={imageUrl} /> 
    </View>
  )
}

function App(): JSX.Element {

  const [diceImage, setDiceImage] = (One)

  return (
   <View style={styles.container}>
    <Text>Hello Image</Text>
   </View>
     
  );
}

const styles = StyleSheet.create({
  container:{

  },
  diceImages:{
    // width:200,
    // height:200
  }
});

export default App;
