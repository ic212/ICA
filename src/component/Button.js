import { TouchableOpacity ,StyleSheet}from 'react-native';
import Text from './Text';
import React from 'react';
import { WIDTH } from '../uitls/const';

export default function Button({style,textStyles,lable,onPress}){
    return(
        <TouchableOpacity onPress={onPress} style={[styles.touch,style]}>
            <Text style={[styles.texts,textStyles]}>{lable}</Text>
        </TouchableOpacity>
    );
}
const styles =StyleSheet.create({
    touch:{
        borderWidth:0.5,
        width:WIDTH/1.2,
        height:50,
        backgroundColor:'black',
        alignSelf:'center',
    
        
    },
    texts:{
      textAlign:'center',
      fontSize:35,
      color:'white',
      fontWeight:'bold',
      fontFamily:'serif'
    }
})

