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
import { MUTATION_ADD_DELIVERY, MUTATION_EDIT_DELIVERY_BOY,QUERY_ALL_DELIVERY_BOY } from '../../Queries';


export default function DeliveryBoyEdit({navigation,route}) {

    const {Data}  =route.params; 
    console.log("data",Data)

    const[breack,setBreack] =useState(false)

 
      const[ deliveryBoyEdit] = useMutation(MUTATION_EDIT_DELIVERY_BOY,{
        refetchQueries:[
        QUERY_ALL_DELIVERY_BOY,
        'getAllDeliveryBoy'
        ]
      })


      const [id, setid] = useState(Data &&Data.getDeliveryBoyById.id);
    const [fName, setFname] = useState(Data &&Data.getDeliveryBoyById.fName);
    const [lName, setLName] = useState(Data &&Data.getDeliveryBoyById.lName  );
    const [contact, setContact] = useState(Data &&Data.getDeliveryBoyById.contact );
    const [email, setEmail] = useState(Data &&Data.getDeliveryBoyById.email);
    const [address, setAddress] = useState(Data &&Data.getDeliveryBoyById.address);
    const [city, setCity] = useState(Data &&Data.getDeliveryBoyById.city);
    const [state, setState] = useState(Data &&Data.getDeliveryBoyById.state);
    const [pincode, setPincode] = useState(Data &&Data.getDeliveryBoyById.pincode );
    const [idType ,setIdType]  =useState(Data &&Data.getDeliveryBoyById.idType);
    const [idNo,setIdNo] =useState(Data &&Data.getDeliveryBoyById.idNo);
    const [useName,setUsername] =useState(Data &&Data.getDeliveryBoyById.userName);

    if(Data && breack === false){
        setid(Data &&Data.getDeliveryBoyById.id)
        setFname(Data &&Data.getDeliveryBoyById.fName);
        setLName(Data &&Data.getDeliveryBoyById.lName  );
        setContact(Data &&Data.getDeliveryBoyById.contact );
       setEmail(Data &&Data.getDeliveryBoyById.email);
        setAddress(Data &&Data.getDeliveryBoyById.address);
        setCity(Data &&Data.getDeliveryBoyById.city);
       setState(Data &&Data.getDeliveryBoyById.state);
       setPincode(Data &&Data.getDeliveryBoyById.pincode );
      setIdType(Data &&Data.getDeliveryBoyById.idType);
    setIdNo(Data &&Data.getDeliveryBoyById.idNo);
       setUsername(Data &&Data.getDeliveryBoyById.userName);
        setBreack(true)

    }


     const submitHandel =()=>{
        deliveryBoyEdit({
        variables:{
            "deliveryEditInput": {
                "lName": `${lName}`,
                "contact": `${contact}`,
                "idNo": `${idNo}`,
                "idType": `${idType}`,
                "pincode": `${pincode}`,
                "city": `${city}`,
                "state": `${state}`,
                "address": `${address}`,
                "userName":`${useName}`,
                "id": `${id}` ,
                "fName": `${fName}`,
                "email": `${email}`
              },
           }
        })
        navigation.navigate('ViewDelivery')
        showMessage({
            message: "Update Profile Successfully",
            backgroundColor: "green", // background color
          });
      }




    
  return (
    <>
    <StatusBar backgroundColor={THEME_COLOR} barStyle="white-content" />
    <ScrollView>
      <View style={styles.mainCardView}>
        <View style={styles.subCardView}>
          <Text style={styles.FormHeading}> Edit Delivery Boy</Text>

          <View style={styles.inputContainer}>
            <FontAwesome name="user" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="First Name " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setFname(value)}  value={fName}/>
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="user" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Last Name " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setLName(value)} value={lName} />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="call" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Contact" placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setContact(value)} value={contact} />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="email" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Email " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setEmail(value)}  value={email}/>
          </View>

          <View style={styles.inputContainer}>
            <Icon name="account-circle" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="username " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setUsername(value)}  value={useName}/>
          </View>


          <View style={styles.inputContainer}>
            <Ionicons name="card-outline" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Id Type " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setIdType(value)} value={idType} />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="card-outline" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Id No " placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setIdNo(value)} value={idNo} />
          </View>


          <View style={styles.inputContainer}>
            <FontAwesome name="map-marker" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Address" placeholderTextColor="#fff" multiline={true} style={styles.input} onChangeText={(value) => setAddress(value)} value={address}/>
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="map-marker" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="City" placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setCity(value)}  value={city}/>
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="map-marker" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="State" placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setState(value)} value={state}/>
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome name="map-marker" color='#fff' size={20} style={styles.inputIcon} />
            <TextInput placeholder="Pincode" placeholderTextColor="#fff" style={styles.input} onChangeText={(value) => setPincode(value)}  value={pincode}/>
          </View>

         
          <TouchableOpacity onPress={() =>submitHandel()}>
            <View
              style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderRadius: 15, padding: 15, marginBottom: 30, marginTop: 15, marginHorizontal: 55 }}>
              <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>
                Change Profile
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