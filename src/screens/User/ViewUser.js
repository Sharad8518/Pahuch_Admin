import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useQuery } from '@apollo/client'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {  QUERY_ALL_SERVICE, QUERY_GET_ALL_USER, QUERY_PRODUCT_RURAL_BY_ID } from '../../Queries'

export default function ViewUser({navigation}) {

   const{data}= useQuery(QUERY_GET_ALL_USER)

    console.log(data)

  return (
    <>
    <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#fff"}}>
    <Feather name="arrow-left"  size={30} style={{margin:10}} color="#27ae60"/>
   </View>
   
               <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                 { data && data.getAllUser.map(service=>{
                   
                   return(
                     <TouchableOpacity onPress={() =>navigation.navigate("UserDetail",{userId:service.id})}>
                     <View style={styles.Boxstyle}  >
                       <View style={styles.ImgBox} >
                        
                             <Image style={styles.styleImg}
                               source={{ uri: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" }}
                             />
                         
                                {/* <Image style={styles.styleImg}
                                 source={{ uri: `https://byaahlagan-profile-image.s3.us-east-2.amazonaws.com/${service.serviceImg}` }}
                               /> */}
                       </View>
                       <View style={styles.detailBox} >
                         <Text style={styles.txtN}>Name: {service.fName}{service.lName}</Text>
                         <Text style={styles.txtN}>Contact : {service.contact}</Text>
                         <Text style={styles.txtN}>Email: {service.email} </Text>
                         

                       </View>
                     </View>
                   </TouchableOpacity>
                   )

                 }) }
   </View>
   
   </>


   
  )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    },
    Boxstyle: {
      width: 330,
      height: 130,
      backgroundColor: "#fff",
      marginTop: 20,
      borderRadius: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    ImgBox: {
      width: 170,
      height: 130,
      marginTop: 10,
    },
    styleImg: {
      width: 150,
      height: 120,
      marginLeft: 5,
      borderRadius: 10
    },
    detailBox: {
      flexDirection: "column"
    },
    txtN: {
      fontSize: 12,
      color: "#000",
      width: 150
    }
  
  
  })
  