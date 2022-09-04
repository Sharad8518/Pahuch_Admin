import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button, StatusBar, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { showMessage, hideMessage } from "react-native-flash-message";
const THEME_COLOR = '#11A05F';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@apollo/client';
import { MUTATION_ADD_DELIVERY } from '../../Queries';


export default function AddDelivery({navigation}) {





    const [fName, setFname] = useState('');
    const [lName, setLName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [password, setPassword] = useState('');
    const [idType ,setIdType]  =useState('');
    const [idNo,setIdNo] =useState('')
    const [useName,setUsername] =useState('')


    const[createdeliveryBoy] =useMutation(MUTATION_ADD_DELIVERY)


    const submitHandel = () => {

        if (fName === '' || lName === '' || contact === '' || email === '' || idNo === '' || idType === ''  || address === '' || city === '' || state === '' || pincode === '' || password === '') {
            showMessage({
                message: "All Field Is required",
                type: "info",
                backgroundColor: "red",
              });
        }else{
            createdeliveryBoy({
             variables:{
                "deliveryBoyInput": {
                    "fName": `${fName}`,
                    "lName": `${lName}`,
                    "email": `${email}`,
                    "contact": `${contact}`,
                    "idNo": `${idNo}`,
                    "idType": `${idType}`,
                    "pincode": `${pincode}`,
                    "city": `${city}`,
                    "state": `${state}`,
                    "address": `${address}`,
                    "userName": `${useName}`,
                    "password": `${password}`
                   
                  }

             }
            })

            showMessage({
                message: "Add SuccessFully",
                backgroundColor: "green", // background color
               
              });
              navigation.navigate("ViewDelivery")
        }
    }

  return (
    <>
    <StatusBar backgroundColor={THEME_COLOR} barStyle="white-content" />
    <ScrollView>
      <View style={styles.mainCardView}>
        <View style={styles.subCardView}>
          <Text style={styles.FormHeading}>Add New Delivery Boy</Text>

          <View style={styles.inputContainer}>
            <FontAwesome name="user" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="First Name " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setFname(value)} />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="user" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Last Name " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setLName(value)} />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="call" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Contact" placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setContact(value)} />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="email" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Email " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setEmail(value)} />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="account-circle" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="username " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setUsername(value)} />
          </View>


          <View style={styles.inputContainer}>
            <Ionicons name="card-outline" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Id Type " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setIdType(value)} />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="card-outline" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Id No " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setIdNo(value)} />
          </View>

        
      

        

          <View style={styles.inputContainer}>
            <FontAwesome name="map-marker" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Address" placeholderTextColor="#fff" multiline={true} style={styles.input} onChangeText={(value) => setAddress(value)} />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="map-marker" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="City" placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setCity(value)} />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="home" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="State" placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setState(value)} />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome name="home" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Pincode" placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setPincode(value)} />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="home" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Password" placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setPassword(value)} />
          </View>

          <TouchableOpacity onPress={() => submitHandel()}>
            <View
              style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderRadius: 15, padding: 15, marginBottom: 30, marginTop: 15, marginHorizontal: 55 }}>
              <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>
                Submit Request
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    FormHeading: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
      marginVertical: 10,
      marginTop: 20,
      marginHorizontal: 5,
      fontWeight: 'bold',
    },
  
    textBox: {
      fontSize: 15,
      borderColor: 'skyblue',
      borderBottomWidth: 2,
      padding: 10,
      marginHorizontal: 0,
      marginVertical: 15,
      color: '#11A05F'
    },
  
    mainCardView: {
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      backgroundColor: '#11A05F',
    },
  
    inputContainer: { flexDirection: 'row', marginTop: 10 },
  
    input: {
      color: '#fff',
      paddingLeft: 30,
      borderColor: '#fff',
      borderBottomWidth: 2,
      flex: 1,
      fontSize: 12,
      marginBottom: 10
    },
  
    inputIcon: { marginTop: 15, position: 'absolute' },
  
    pickerChoosing: {
      flex: 1,
      borderColor: '#fff',
      borderBottomWidth: 2,
      marginHorizontal: 2,
      marginTop: 8,
      color: '#11A05F'
    },
  });