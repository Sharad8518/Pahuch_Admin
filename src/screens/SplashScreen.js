import React from 'react'
import {Text, View, ActivityIndicator} from 'react-native'
export default function SplashScreen() {
    return (
        <View style={{flex:1, justifyContent:'center'}}>
            <ActivityIndicator size="large" color="#000"/>
        </View>
    )
}
