import { View, Text ,Image, ActivityIndicator,TouchableOpacity } from 'react-native'
import React from 'react'
import {  Card } from "react-native-paper"
import { useQuery } from '@apollo/client'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { QUERY_ALL_DELIVERY_BOY } from '../../Queries'
export default function ViewDelivery({navigation}) {


 const{data,loading} = useQuery(QUERY_ALL_DELIVERY_BOY)

 console.log("data",data)



  return (
    <>
    <View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <FontAwesome name='angle-left' size={25}  color="#2ecc71" style={{margin:10}}/>
         <Text style={{marginTop:10,marginRight:10,color:"#2ecc71",fontWeight:"bold"}}>All Delivery Boy</Text>
        </View>

        {

          loading ?
               <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <ActivityIndicator  color ="#000" size="large"/>
            <Text>Please Wait Loading</Text>
            </View>
          :
          data && data.getAllDeliveryBoy.map(deliveryboy=>{
          return(

            <Card style={{margin:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate("DeliveryBoyDetail",{ dataId: deliveryboy.id })}>
            <View style={{flexDirection:"row"}}>
         <Image source={{uri:"https://img.freepik.com/free-vector/delivery-service-with-masks-concept_52683-36955.jpg?w=740&t=st=1662282382~exp=1662282982~hmac=59a946d8fb6eef3247fb214f94e8359e479ba44b16cb9aa5a4e00812ef809bd3"}}
         style={{width:150,height:"90%",marginTop:5,marginLeft:10}}
        
         />
    
          <View style={{flexDirection:"row",justifyContent:"flex-end",}}>
            <Text style={{fontSize:12,marginTop:10,color:"#2ecc71"}}> </Text>
         </View>
         
         
         <View style={{flexDirection:"column"}}>
         
         <Text style={{marginTop:10,width:180,marginLeft:10,color:"#000",fontSize:12}}>Username: {deliveryboy.userName}</Text>
          <Text style={{marginTop:5,width:190,marginLeft:10,color:"#000",fontSize:12}}>Name: {deliveryboy.fName} {deliveryboy.lName}</Text>
          <Text style={{marginTop:5,width:190,marginLeft:10,color:"#000",fontSize:12}}>Contact: {deliveryboy.contact}</Text>
          <Text style={{marginTop:5,width:190,marginLeft:10,color:"#000",marginBottom:20,fontSize:12,color:"#2ecc71"}}>ID No : {deliveryboy.uniqueId} </Text>
         
         </View>
         
    </View>
    </TouchableOpacity>
         </Card>

          )


          })





        }


    
    </View>

     
    </>
  )
}