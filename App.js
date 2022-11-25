import React,{Component}from 'react';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import S1 from './src/screens/Screen1';
import S2 from './src/screens/Screen2';



const App=createStackNavigator(
{
  S1 :{screen:S1},
  S2 :{screen:S2},
  
  
}
);
export default createAppContainer(App);
