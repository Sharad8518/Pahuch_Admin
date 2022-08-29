/* eslint-disable prettier/prettier */
import React, { useContext ,useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreennew from '../screens/LoginScreennew';
import LoginVendorOptionsScreen from '../screens/LoginVendorOptionsScreen';

import { AuthContext } from '../context/AuthContext';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@apollo/client';
import { QUERY_VENDOR_BY_ID } from '../Queries';
import AdminDashboard from '../screens/AdminDashboard';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { userInfo, serviceUserInfo, splashLoading } = useContext(AuthContext);

  




  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
       
          userInfo ?
            <>
              <Stack.Screen component={AdminDashboard} name='AdminDashboard' />
              
            </> :
            
          
              <>
                <Stack.Screen component={LoginScreennew} name='LoginScreennew' />
                <Stack.Screen component={LoginVendorOptionsScreen} name='LoginVendorOptionsScreen' />
               

               
              </>



      }
    </Stack.Navigator>
  )
}


export default AuthStack;