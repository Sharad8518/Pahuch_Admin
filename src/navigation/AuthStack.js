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
import Service from "../screens/Service"
import Vendor from "../screens/Vendor"
import Delivery from "../../src/screens/Delivery/Delivery"
import User from "../screens/User"
import ViewRural from '../screens/Vendor/ViewRural';
import ViewUrban from '../screens/Vendor/ViewUrban';
import AdminDashboard from '../screens/AdminDashboard';
import ViewDelivery from '../screens/Delivery/ViewDelivery';
import AddDelivery from '../screens/Delivery/AddDelivery';
import DeliveryBoyDetail from '../screens/Delivery/DeliveryBoyDetail';
import DeliveryBoyEdit from '../screens/Delivery/DeliveryBoyEdit';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { userInfo, serviceUserInfo, splashLoading } = useContext(AuthContext);


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
       
          userInfo ?
            <>
              <Stack.Screen component={AdminDashboard} name='AdminDashboard' />
              <Stack.Screen component={Service} name='Service' />
              <Stack.Screen component={Delivery} name='Delivery' />
              <Stack.Screen component={Vendor} name='Vendor' />
              <Stack.Screen component={User} name='User' />
              <Stack.Screen component={ViewRural} name='ViewRural' />
              <Stack.Screen component={ViewUrban} name='ViewUrban' />
              <Stack.Screen component={AddDelivery} name='AddDelivery' />
              <Stack.Screen component={ViewDelivery} name='ViewDelivery' />
              <Stack.Screen component={DeliveryBoyDetail} name='DeliveryBoyDetail' />
              <Stack.Screen component={DeliveryBoyEdit} name='DeliveryBoyEdit' />
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