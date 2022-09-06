import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import { ScrollView, } from 'react-native-gesture-handler'
import { useQuery } from '@apollo/client'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {  QUERY_ALL_SERVICE, QUERY_PRODUCT_RURAL_BY_ID } from '../../Queries'
export default function ViewService({navigation}) {

  const{data,loading}=  useQuery(QUERY_ALL_SERVICE);

  console.log(data)

  return (
    <>
    <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#fff"}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Feather name="arrow-left"  size={30} style={{margin:10}} color="#27ae60"/>
    </TouchableOpacity>
   </View>
   <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:10}}>
   <View style={{width:"95%",flexDirection:"row",borderWidth:2,borderColor:"#2ecc71",borderRadius:10}}>
    <Feather name="search"  size={25} style={{margin:10}}  color="#2ecc71"/>
    <TextInput placeholder='Search..'  />
   </View>
   </View>
               <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                {

                    loading ?
                    <View style={{flexDirection:"column",marginTop:100}}>
                     <ActivityIndicator size="large"  />
                     <Text>Please Wait Loading</Text>
                    </View>
                    :
                   <>
                    
                    {
                         data && data.getAllService.length  === 0 ?
                         <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Image source={{uri:"https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?w=740&t=st=1662454090~exp=1662454690~hmac=1567dfce732fd9049c8716df46a6c1537caec479369833e8bb2d8f04e49a4d96"}}  style={{width:200,height:200}}/>
                        </View>
                         :
                         <>
                         
                  { data && data.getAllService.map(service=>{
                   return(
                     <TouchableOpacity onPress={() =>navigation.navigate("ServiceDetail",{serviceId:service.id})}>
                     <View style={styles.Boxstyle}  >
                       <View style={styles.ImgBox} >
                        
                             {/* <Image style={styles.styleImg}
                               source={{ uri: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" }}
                             /> */}
                         
                                <Image style={styles.styleImg}
                                 source={{ uri: `https://byaahlagan-profile-image.s3.us-east-2.amazonaws.com/${service.serviceImg}` }}
                               />
                  
                       </View>
                       <View style={styles.detailBox} >
                         <Text style={styles.txtN}>Name: {service.fName}{service.lName}</Text>
                         <Text style={styles.txtN}>occupation : {service.occupation}</Text>
                         <Text style={styles.txtN}>Exp: {service.workExperience} </Text>
                       </View>
                     </View>
                   </TouchableOpacity>
                   )
                     })}
                   

                         </>



                    }



                   
                   
                   </>


                }



               
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
  