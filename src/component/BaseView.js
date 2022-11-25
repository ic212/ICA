import React from 'react';
import { View } from 'react-native';
import { Children } from 'react/cjs/react.production.min';

export default function BaseView ({children,style}){
    return(
        <View style={[{flex:1,backgroundColor:'grey'},style]}>{children}</View>
    )
}