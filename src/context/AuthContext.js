/* eslint-disable no-sequences */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { MUTATION_VENDOR_LOGIN, MUTATION_SERVICE_PROVIDER_LOGIN, MUTATION_LOGIN_DELIVERY_BOY, MUTATION_ADMIN_LOGIN } from '../Queries';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [loginError, setLoginError] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const [serviceUserInfo, setServiceUserInfo] = useState();
    const [emptyError, serEmptyError] = useState(false);

    const [breakIf, setBreakIf] = useState(true);

    const [splashLoading, setSplashLoading] = useState(false);

    const [adminLogin, { data:adminLoginData, loading: adminLoginLoading }] = useMutation(MUTATION_ADMIN_LOGIN,{
        onError(e) {
            console.log("Error", e);
            setLoginError(true);
        }
    });
   
  console.log(adminLoginData)

    const loginHandle = async (userName, password, loginType) => {
            if (userName === '', password === '') {
                serEmptyError(true);
            }

            
            else {
                serEmptyError(false);
                setBreakIf(true);
                setLoginError(false);
                
                adminLogin({
                    variables: {
                        "userName": `${userName}`,
                        "password": `${password}`
                    },
                });
            }
        

    }

    const logOut = async () => {
        setUserInfo();
        await AsyncStorage.removeItem('adminId');
        await AsyncStorage.removeItem('adminToken');
    }
   

    

    if (adminLoginData && breakIf) {
        AsyncStorage.setItem('adminToken', adminLoginData.adminLogin.adminToken);
        AsyncStorage.setItem('adminId', adminLoginData.adminLogin.adminId);
        setUserInfo(adminLoginData.adminLogin.adminToken);
        setBreakIf(false);
      
    }

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true)
            let userInfo = await AsyncStorage.getItem('adminToken');
         
            if (userInfo) {
                setUserInfo(userInfo);
                console.log(userInfo);
            }
           
            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false);
            console.log(e);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);


    return (
        <AuthContext.Provider value={{
            loginHandle,
            emptyError,
            loginError,
            // vendorLoginLoading,
            userInfo,
            logOut,
            adminLoginLoading
            // serviceLoginLoading,

         
        }}>
            {children}
        </AuthContext.Provider>
    );

}