import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_VENDOR_BY_ID } from '../../Queries';
import { useNavigation } from '@react-navigation/native';


export default function ViewRuralDetail({navigation,route}) {

    const {vendorId}  =route.params; 

     const{data} =useQuery(QUERY_VENDOR_BY_ID,{
        variables:{
            "vendorId":`${vendorId}`
        }
     })
     const navigate = useNavigation()

      console.log(data)

  return (
     <>
     <View style={{flexDirection:"row",justifyContent:"space-between"}}>
     <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name='arrow-left' size={25} color="#27ae60" style={{ margin: 10 }} />
    </TouchableOpacity>
     </View>
     <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
     <Image source={{uri:"https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5f76d7cb690e57c164388d32_Artboard%208.png" }} style={{width:150,height:150,borderRadius:100,borderWidth:2,borderColor:"#27ae60"}} />
     <View style={{flexDirection:"row"}}>
     <Text style={{marginTop:10,color:"#000",fontSize:17}}>{data && data.vendorById.fName} </Text>
     <Text style={{marginTop:10,color:"#000",fontSize:17}}>{data && data.vendorById.lName}</Text>
     </View>
    <TouchableOpacity onPress={()=>alert("ok")}>
     <View style={{backgroundColor:"#EA2027", alignItems:"center" ,justifyContent:"center" ,width:150,height:35,marginTop:20,borderRadius:5}}>
       <Text style={{color:"#fff"}}>Block</Text>
     </View>
     </TouchableOpacity>
     </View>
    
    <View style={{flexDirection:"row", marginLeft:10,marginTop:20}}>
   <Feather name="mail" size={20}  color="#2ed573"/>
   <Text style={{marginLeft:10,color:"#000"}}>{data && data.vendorById.email}</Text>
    </View>


    <View style={{flexDirection:"row", marginLeft:10,marginTop:5}}>
   <Feather name="phone" size={20}  color="#2ed573"/>
   <Text style={{marginLeft:10,color:"#000"}}>{data && data.vendorById.contact
}</Text>
    </View>

    <View style={{flexDirection:"row", marginLeft:10,marginTop:5}}>
   <Feather name="briefcase" size={20}  color="#2ed573"/>
   <Text style={{marginLeft:10,color:"#000"}}>{data && data.vendorById.villagerOccupation

}</Text>
    </View>


    <View style={{flexDirection:"row", marginLeft:10,marginTop:5}}>
   <Feather name="map-pin" size={20}  color="#2ed573"/>
   <Text style={{marginLeft:10,color:"#000"}}>{data && data.vendorById.villagerAddress} , {data && data.vendorById.villagerVillageName} ,{data && data.vendorById.villagerPincode}</Text>
    </View>

    <View style={{flexDirection:"row", marginLeft:10,marginTop:5}}>
   <Feather name="map-pin" size={20}  color="#2ed573"/>
   <Text style={{marginLeft:10,color:"#000"}}>{data && data.vendorById.villagerDistrict} , {data && data.vendorById.villagerState}</Text>
    </View>

     <View style={{flexDirection:"row",marginTop:50,alignItems:"center",justifyContent:"center"}}>

      <TouchableOpacity onPress={()=>navigation.navigate("ViewRuralProduct",{vendorId:data && data.vendorById.id })}>

     <View style={{flexDirection:"row",width:150,borderWidth:2,borderColor:"#2ed573",height:40,alignItems:"center",justifyContent:"center"}} >
     <Feather name="shopping-cart" size={20}  color="#2ed573"/>
     <Text style={{marginLeft:10,color:"#000"}}>View Product</Text>
     </View>
     </TouchableOpacity>


     </View>
     
     </>
  )
}