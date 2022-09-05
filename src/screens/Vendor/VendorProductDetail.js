import { Text, StyleSheet, View ,Image,ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native'
import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Moment from 'react-moment';

import { useQuery, useMutation, } from '@apollo/client'
import { showMessage, hideMessage } from 'react-native-flash-message'
import { QUERY_PRODUCT_BY_ID } from '../../Queries';
export default function VendorProductDetail({route,navigation}) {

    const {userId}  =route.params; 
    const{data,loading} = useQuery(QUERY_PRODUCT_BY_ID,{
     variables:{
       "productId": `${userId}`
     }
    })


  return (
    <>
       {
           loading ?
           <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1}}>
           <ActivityIndicator color="#000" size="large" />
           <Text>Please Wait Loading </Text>
           </View>
           :
           <>
            <View style={{ flexDirection: "column" }}>
        <ScrollView>
        <View style={{backgroundColor: "#11A05F",height: 320, borderBottomStartRadius: 20, borderBottomEndRadius: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesome name="arrow-left" size={20} color="#fff" style={{ marginHorizontal: 5 ,marginTop:10,marginLeft:20}} />
                    </TouchableOpacity>
         <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#11A05F", height: 300, borderBottomStartRadius: 20, borderBottomEndRadius: 20 }}>
           <View style={{ marginTop: 10 }}>
           { 
          data && data.getProductById.productImages.length===0?
          <>
           <Image source={{ uri: `https://i5.walmartimages.com/asr/c35cf934-d593-4c10-ba2e-13bf64fd1bc9_1.b217effb6a36bab46cdd08e3b3bb2d0a.jpeg`}} style={{ width: 250, height: 220, borderRadius: 20 }} />
          </>
          :
          <>
           <Image   source={{uri:`https://byaahlagan-profile-image.s3.us-east-2.amazonaws.com/${data && data.getProductById.productImages[0]}`}} style={{ width: 250, height: 220, borderRadius: 20 }} />
          </>


        }

           </View>
         </View>
         </View>
         <Text style={{ marginTop: 20, marginLeft: 20, fontSize: 20, color: "#11A05F" }}>Price: {data && data.getProductById.productionSellingPrice} /-</Text>
         <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
           <View>
             <Text style={{ color: "#000", fontSize: 16 }}>{data && data.getProductById.productName} </Text>
           </View>
           <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
             <View>
               <Text style={{ color: "#000" }}>{data && data.getProductById.productDescription}</Text>
             </View>
           </View>
           <View>
           </View>
         </View>
         <View >
        
           <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
             <Text style={{ marginStart: 20 }}>StockAvailable : {data && data.getProductById.productStockAvailable}</Text>
             <Text style={{ marginEnd: 20 }}>StockType : {data && data.getProductById.productStockType} </Text>
           </View>
          
           <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
             <Text style={{ marginStart: 20 ,width:120}}>Expiration Date : <Moment element={Text} format='DD-MM-YYYY'>{data && data.getProductById.productExpirationDate}</Moment> </Text>
  
           </View>
           <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
             <Text style={{ marginStart: 20 }}>Create Date : <Moment element={Text} format='DD-MM-YYYY'>{data && data.getProductById.produteCreatedDateTime}</Moment>  </Text>
           </View>
         </View>
        
       
         
         </ScrollView>
       </View>
           </>
        



       }

       
       </>
  )
}