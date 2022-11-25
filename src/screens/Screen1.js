import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity}from 'react-native';
import BaseView from '../component/BaseView';
import Text from '../component/Text';
import {green, white} from '../uitls/Color';
import Input from '../component/Input';
import Button from '../component/Button';

export default class Screen1 extends Component{
Show=()=>
{
    this.props.navigation.navigate('S2')
   
}
    render()
    {
        return(
            <BaseView style={styles.view}>
            
                <Text style={{textAlign:'center'}} h1 color={green}>Login Page</Text>
                <Input placeholder="Enter Your Name"></Input>
               
             <Button onPress={this.Show} lable={'Login'}/>
            
          
                </BaseView>
                
        
        )
    }
}
  

const styles =StyleSheet.create({
    view:{
        backgroundColor:'red',
        flex:1,
        // alignItems:'center'
        
    }
})