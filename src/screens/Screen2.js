import React,{Component} from 'react';
import {StyleSheet}from 'react-native';
import Input from '../component/Input';
import {green} from '../uitls/Color';
import Text from '../component/Text';
import BaseView from '../component/BaseView';
export default class Screen2 extends Component{
    render()
    {
        return(
            <BaseView style={styles.view}>
                <Text h1 color={green}>Screen 2</Text>
                <Input></Input>

           </BaseView>
        )
    }
}
const styles =StyleSheet.create({
    view:{
        backgroundColor:'red',
        flex:1
    }
})
  