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
      <Image style={styles.diceImage} source={imageUrl} /> 
    </View>
  )
}

function App(): JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(One)
  const rollDice = () =>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
   
      switch(randomNumber){
        case 1:
          setDiceImage(One)
          break;
        case 2:
          setDiceImage(two)
          break;
        case 3:
          setDiceImage(three)
          break;   
        case 4:
          setDiceImage(four)
          break;
        case 5:
          setDiceImage(five)
          break;
        case 6:
          setDiceImage(six)
          break;
        default:
          setDiceImage(One)
          break;

      }
  }

  return (
   <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
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
    backgroundColor: '#be7bd1',
    
  },
  diceContainer:{
    margin:20
  },
  diceImage:{
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
