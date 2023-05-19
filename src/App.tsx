import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable
} from 'react-native';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

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
    <View style ={styles.diceContainer}>
      <Image style={styles.assetImage} source={imageUrl} /> 
    </View>
  )
}

function App(): JSX.Element {

  const [randomBackground, setRandomBackground] = useState("#ffffff")

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(One)
  const rollDice = () =>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    const hexRange = '0123456789ABCDEF'
    let color='#'
    for (let i = 0; i < 6; i++) {
     color += hexRange[Math.floor(Math.random() * 16)];
    }
   
      switch(randomNumber){
        case 1:
          setDiceImage(One)
          setRandomBackground(color)
          break;
        case 2:
          setDiceImage(two)
          setRandomBackground(color)
          break;
        case 3:
          setDiceImage(three)
          setRandomBackground(color)
          break;   
        case 4:
          setDiceImage(four)
          setRandomBackground(color)
          break;
        case 5:
          setDiceImage(five)
          setRandomBackground(color)
          break;
        case 6:
          setDiceImage(six)
          setRandomBackground(color)
          break;
        default:
          setDiceImage(One)
          setRandomBackground(color)
          break;

      }
      ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  
  return (
   <View style={[styles.container, {backgroundColor:randomBackground}]}>
    
    <View style={styles.directionDice}>
      <Dice imageUrl={diceImage}/>
      <Dice imageUrl={diceImage}/>
      </View>
      <Pressable onPress={rollDice}>
            <Text style={styles.rollDiceBtn}>Roll the dice</Text>
      </Pressable>
   </View>
     
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#be7bd1'
  },
  directionDice:{
    flexDirection:'row'
  },
  diceContainer:{
    margin:20
  },
 assetImage:{
    width:150,
    height:150,
  },
  rollDiceBtn:{
    paddingVertical:10,
    paddingHorizontal:20,
    color:'#8EA7E9',
    fontWeight:'700',
    textTransform:'uppercase',
    borderRadius:10,
    borderColor:'#E5E0FF',
    borderWidth:2,


  }
});

export default App;
