/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, TextInput, StatusBar, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Picker } from '@react-native-picker/picker';
import ImgPath from "../assets/Img.png"
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../context/AuthContext';
const THEME_COLOR = '#fff';


export default function LoginScreennew({ navigation }) {

    const { loginHandle, loginError, emptyError, adminLoginLoading } = useContext(AuthContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [loginType, setLoginType] = useState('');

    return (
        <>
            <StatusBar backgroundColor={THEME_COLOR} barStyle="dark-content" />
            <View style={styles.container}>
                <View style={styles.header}>
                   <Image source={ImgPath} style={{width:"90%",height:200,marginBottom:20}} />

                    <Animatable.View animation="fadeInDown" >
                        <Text style={styles.title}> Admin Login !!!</Text>
                    </Animatable.View>
                   
                    <View>
                        <TextInput style={styles.input} placeholder="Username" underlineColorAndroid="rgba(0,0,0,0)" onChangeText={(value) => setUserName(value)} />
                    </View>
                    <View>
                        <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" underlineColorAndroid="rgba(0,0,0,0)" onChangeText={(value) => setPassword(value)} />
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                            <Text style={{ color: 'blue', fontWeight: '500', fontSize: 12 }}>
                                Forgot Password ?
                            </Text>
                        </View>
                    </View>

                    {
                        emptyError ?

                            <View style={{ justifyContent: 'center', marginTop: 20 }}>
                                <Text style={{ color: '#e74c3c', fontSize: 12, fontWeight: 'bold' }}>Fill All Fields!!!</Text>
                            </View> :
                            <Text></Text>
                    }
                    {
                       loginError ?

                            <View style={{ justifyContent: 'center', marginTop: 20 }}>
                                <Text style={{ color: '#e74c3c', fontSize: 12, fontWeight: 'bold' }}>Incorrect Password</Text>
                            </View> :
                            <Text></Text>
                       }

                    <View style={styles.button}>
                        {
                            adminLoginLoading ?
                                <ActivityIndicator size="large" color="#000" /> :
                                    <TouchableOpacity onPress={() => loginHandle(userName, password, loginType)}>
                                        <LinearGradient colors={['#16a085', '#8e44ad']} style={styles.signIn}>
                                            <Text style={styles.textSign}>
                                                Login
                                            </Text>
                                            <MaterialIcons name="navigate-next" color='#fff' size={20} />
                                        </LinearGradient>
                                    </TouchableOpacity>
                        }
                    </View>
                </View>
               
            </View>
        </>
    )
}


const { height } = Dimensions.get("screen");
const height_logo = height * 0.37;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    input: {
        paddingLeft: 30,
        color: '#05375a',
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 10,
        width: 300,
        marginTop: 20,

    },

    logo: {
        width: 1.3 * height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 30,
    },
    text: {
        color: 'grey',
        marginTop: 5,
        marginHorizontal: 15
    },
    button: {
        alignItems: 'flex-end',
    },
    signIn: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },

});