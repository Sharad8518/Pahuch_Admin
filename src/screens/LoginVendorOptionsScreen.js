/* eslint-disable react/self-closing-comp */

/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StatusBar, TextInput, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { Button, Badge, Card } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

const THEME_COLOR = '#fff';
export default function LoginVendorOptionsScreen({ navigation }) {

    return (
        <>
            <StatusBar backgroundColor={THEME_COLOR} barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

                <View style={{ marginTop: 50 }}>

                    <Animatable.View animation="fadeInDown">
                        <Text style={styles.title}>
                            Please Select uour Signup and Connect with us !!
                        </Text>
                        <Text style={styles.text}>
                            Signup As A Vendor
                        </Text>
                    </Animatable.View>
                </View>

                <ScrollView>
                    <View style={{ flexDirection: 'row', marginTop: 50 }}>
                    </View>
                    <View style={{
                        flexDirection: 'row', padding: 20, marginTop: -20,

                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RuralRegisterScreen')}
                            style={{ flex: 2, flexDirection: 'row' }} >
                            <View style={{
                                borderColor: '#C6C6C6', elevation: 8,
                                borderWidth: 1, width: 50, height: 120, backgroundColor: '#fff', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15
                            }} >
                                <Image
                                    source={{ uri: 'https://img.freepik.com/free-vector/farmer-crop-harvest-flat-composition_98292-6956.jpg?t=st=1651401184~exp=1651401784~hmac=fb0e59b9094186cc2663fae80bb57d95bf9b7a203173246e41bc4d9ea6763e59&w=740' }}
                                    style={{ flex: 2, width: '100%', marginRight: 50, height: 250, backgroundColor: '#fff', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, resizeMode: 'cover', }}
                                />
                            </View>


                            <View style={{
                                borderColor: '#C6C6C6', elevation: 8,
                                borderWidth: 1, width: 50, height: 120, backgroundColor: '#fff', flex: 3, borderTopRightRadius: 15, borderBottomRightRadius: 15
                            }} >

                                <Text style={{ fontSize: 20, paddingLeft: 15, color: 'black', fontWeight: 'bold', marginTop: 20 }}>
                                    Signup as Rural Vendor
                                </Text>

                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: 'row', padding: 20, marginTop: -20,

                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('UrbanRegisterScreen')}
                            style={{ flex: 2, flexDirection: 'row' }} >
                            <View style={{
                                borderColor: '#C6C6C6', elevation: 8,
                                borderWidth: 1, width: 50, height: 120, backgroundColor: '#fff', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15
                            }} >
                                <Image
                                    source={{ uri: 'https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg?t=st=1651401444~exp=1651402044~hmac=d5f4448e8d054b0c2075588a29963a94ee359d28a7079f2b0ecbe5a4927a0fbd&w=740' }}
                                    style={{ flex: 2, width: '100%', height: '100%', marginRight: 50, height: 250, backgroundColor: '#fff', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, resizeMode: 'cover', }}
                                />
                            </View>


                            <View style={{
                                borderColor: '#C6C6C6', elevation: 8,
                                borderWidth: 1, width: 50, height: 120, backgroundColor: '#fff', flex: 3, borderTopRightRadius: 15, borderBottomRightRadius: 15
                            }} >

                                <Text style={{ fontSize: 20, paddingLeft: 15, color: 'black', fontWeight: 'bold', marginTop: 20 }}>
                                    Signup as Urban Vendor
                                </Text>

                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: 'row', padding: 20, marginTop: -20,

                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ServiceProviderScreen')}
                            style={{ flex: 2, flexDirection: 'row' }} >
                            <View style={{
                                borderColor: '#C6C6C6', elevation: 8,
                                borderWidth: 1, width: 50, height: 120, backgroundColor: '#fff', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15
                            }} >
                                <Image
                                    source={{ uri: 'https://img.freepik.com/free-vector/flat-design-locksmith-character_23-2147728354.jpg?t=st=1651401483~exp=1651402083~hmac=50db43403854ea7caed0a3e3071cb9564b56f825604d9b265d3f141a9fcae819&w=740' }}
                                    style={{ flex: 2, width: '100%', marginRight: 50, height: 250, backgroundColor: '#fff', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, resizeMode: 'cover', }}
                                />
                            </View>
                            <View style={{
                                borderColor: '#C6C6C6', elevation: 8,
                                borderWidth: 1, width: 50, height: 120, backgroundColor: '#fff', flex: 3, borderTopRightRadius: 15, borderBottomRightRadius: 15
                            }} >

                                <Text style={{ fontSize: 20, paddingLeft: 15, color: 'black', fontWeight: 'bold', marginTop: 20 }}>
                                    Signup as Service Provider
                                </Text>

                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreennew')}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: -50

                    }}>
                        <Text style={{ color: 'black', fontWeight: '900', fontSize: 14 }}>
                            Already User ?
                            <Text style={{ color: 'blue', fontWeight: '900', fontSize: 14 }}> Log in </Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    Imageview: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        marginHorizontal: 6,
        borderColor: "#2c3e50",
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    mainCardView: {


        backgroundColor: 'white',
        borderRadius: 15,

        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',

        marginHorizontal: 10
    },
    title: {
        color: '#05375a',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginHorizontal: 15
    },
    text: {
        color: 'grey',
        marginTop: 5,
        marginHorizontal: 15
    },



})