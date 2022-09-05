import { View, Text ,TouchableOpacity,TextInput,Image,ActivityIndicator} from 'react-native'
import React from 'react'
import { Card} from "react-native-paper"
import { useQuery } from '@apollo/client'
import Feather from 'react-native-vector-icons/Feather'
import { QUERY_ALL_URBAN } from '../../Queries'


export default function ViewUrban({navigation}) {
    const{data,loading}= useQuery(QUERY_ALL_URBAN)

    console.log(data)

  return (
    <>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
     <Feather name='arrow-left' size={25} color="#27ae60" style={{margin:10}}/>
     </TouchableOpacity>
      <Text style={{margin:10,fontSize:16,fontWeight:"bold",color:"#27ae60"}}>All Urban</Text>
    </View>
   <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
   <View style={{width:"90%",borderColor:"#2ecc71",borderWidth:2,borderRadius:10,flexDirection:"row"}}>
    <Feather name="search"  size={25} style={{margin:10}} color="#2ecc71"/>
    <TextInput placeholder='Search..' />
   </View>
   </View>

    <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:10}}>
    {
        loading ?
        <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
         <ActivityIndicator size="large"  color="#000" />
         <Text>Please Wait Loading</Text>
         </View>
        :
        <>
        {

            data && data.getAllVendor.filter(data=>data.role ==="Urban").map(iData=>{
                return(
                    <Card style={{width:"90%",elevation:8}}>
         <TouchableOpacity onPress={()=>navigation.navigate("ViewUrbanDetail",{vendorId:iData.id})}>
         <View style={{flexDirection:"row"}}>
         <View style={{marginLeft:10}}>
         <Image source={{uri:"https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5f76d7cb690e57c164388d32_Artboard%208.png"}} style={{width:120,height:130}} />
         </View>
         <View style={{flexDirection:"column",marginLeft:20}}>
         <View style={{marginRight:50,flexDirection:"row"}}>
        <Feather name="user" style={{marginTop:20,marginRight:10}} size={17} color="#2ecc71"/>
          <Text style={{marginTop:20,fontSize:13,color:"#000"}}>{iData.fName} {iData.lName}</Text>
         </View>
         <View style={{marginRight:50,flexDirection:"row"}}>
        <Feather name="phone" style={{marginTop:5,marginRight:10}} size={17}  color="#2ecc71"/>
          <Text style={{marginTop:5,fontSize:13,color:"#000"}}>{iData.contact}</Text>
         </View>
         <View style={{marginRight:50,flexDirection:"row"}}>
        <Feather name="map-pin" style={{marginTop:5,marginRight:10}} size={17}  color="#2ecc71"/>
          <Text style={{marginTop:5,fontSize:13,color:"#000"}}>{iData.shopCity} {iData.shopState}</Text>
         </View>
         <View style={{marginRight:50,flexDirection:"row"}}>
          <Text style={{marginTop:5,marginRight:10}}>Status</Text>
          <Text style={{marginTop:5,fontSize:13,color:"#000"}}>{iData.status}</Text>
         </View>
         </View>
         </View>
         </TouchableOpacity>
         </Card>
            )
            })
    
            }
         </>
    }




    

     

    </View>
    </>
  )
}