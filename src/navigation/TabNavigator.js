import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingScreen from '../screens/SettingScreen'
import MessageScreen from '../screens/MessageScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ServicevendorScreen from '../ServiceVendorDashboard/ServiceVendorDashboardScreen'
import MainHomeScreen from '../screens/MainHomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const TabNavigator =() =>{
  return(
    <Tab.Navigator screenOptions={{headerShown:false,
    tabBarShowLabel:false,
    tabBarStyle:{
      position:'absolute',
       
       
         elevation:0,
        
         height:50,
       
         ...styles.shadow
    }
    
    
    }}
   
    
    
    >
    <Tab.Screen name="home2" component={MainHomeScreen} 
        options={{
          tabBarIcon:({color, size}) =>(
            <Ionicons name="home" color="#11A05F" size={25} />
          )
        }}

    />
    <Tab.Screen name="Settings" component={SettingScreen}
     options={{
          tabBarIcon:({color, size}) =>(
            <Ionicons name="search" color="#11A05F" size={25} />
          )
        }} />
    <Tab.Screen name="Message" component={MessageScreen} 
     options={{
          tabBarIcon:({color, size}) =>(
            <AntDesign name="pluscircle" color="#11A05F" size={25} 
           
             />
          )
        }}  />
    <Tab.Screen name="Profile" component={ProfileScreen} 
       options={{
          tabBarIcon:({color, size}) =>(
            <Ionicons name="settings" color="#11A05F" size={25} />
          )
        }}
    />
    <Tab.Screen name="User Profile" component={ServicevendorScreen}
     options={{
          tabBarIcon:({color, size}) =>(
            <Ionicons name="person" color="#11A05F" size={25} />
          )
        }} />
  </Tab.Navigator>
  )
}


const styles = StyleSheet.create({

  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10,

    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }

})

export default TabNavigator;