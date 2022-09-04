import { View, Text,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useMutation, useQuery } from '@apollo/client';
import { MUTATION_DELETE_DELIVERY_BOY, QUERY_DELIVERY_BOY_BY_ID,QUERY_ALL_DELIVERY_BOY } from '../../Queries';
import { showMessage, hideMessage } from "react-native-flash-message";
import Moment from 'react-moment';


export default function DeliveryBoyDetail({navigation,route}) {

    const {dataId}  =route.params; 
   
 

     const{data} =useQuery(QUERY_DELIVERY_BOY_BY_ID,{
      variables:{
        "deliveryId": `${dataId}`
      }  
     })
  
   const[  deliveryDelete] =useMutation(MUTATION_DELETE_DELIVERY_BOY,{
    refetchQueries:[
    QUERY_ALL_DELIVERY_BOY,
    "getAllDeliveryBoy"
    
]
   })


     console.log(data)

  const handleDelete=(id)=>{
    deliveryDelete({
    variables:{
        "deliveryId": `${id}`
    }
    })
    navigation.navigate(`ViewDelivery`)
    showMessage({
        message: "Delete Successfully",
        backgroundColor: "green", // background color
      });


  }

  return (
    <View>

    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:20}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
     <FontAwesome name="chevron-left"  style={{marginLeft:10,marginTop:10}} size={20} color="#2ecc71"/>
     </TouchableOpacity>
     <Text style={{marginTop:5,marginRight:10,fontSize:15,color:"#2ecc71",fontWeight:"bold"}}>Delivery Boy Profile</Text>
    </View>

    <View style={{flexDirection:"column",marginTop:10,justifyContent:"center",alignItems:"center"}}>
   <Image source={{uri:"https://img.freepik.com/free-vector/delivery-service-with-masks-concept_52683-36955.jpg?w=740&t=st=1662285696~exp=1662286296~hmac=55c3c778aaed54123fb7de32f3667e99e0ae51ffdbd53330fb6a123df668ef02"}}  style={{width:150,height:150,marginLeft:10,borderRadius:100}}/>
   <Text style={{marginLeft:10,fontSize:15,color:"#000",marginTop:10,marginBottom:10}}>{data && data.getDeliveryBoyById.userName}</Text>

   <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
    <TouchableOpacity onPress={()=>navigation.navigate('DeliveryBoyEdit',{Data:data})}>
    <View style={{width:150,backgroundColor:"#2ecc71",flexDirection:"row",height:40,alignItems:"center",justifyContent:"center",borderRadius:10}}>
   <FontAwesome name="pencil-square-o"  size={20} color="#fff"/>
   <Text style={{marginLeft:5,color:"#fff"}}>Edit </Text>
   </View>
   </TouchableOpacity>

   </View>
   </View>

   <View style={{flexDirection:"column",marginTop:30}}>
    
   <View style={{flexDirection:"row",marginTop:5}}>
   <FontAwesome name="user"  size={18} color="#27ae60" style={{marginLeft:10}}/>
   <Text style={{marginLeft:5,color:"#000"}}>{data && data.getDeliveryBoyById.fName} {data && data.getDeliveryBoyById.lName
}</Text>
   </View>

    <View style={{flexDirection:"row",marginLeft:10,marginTop:5}}>
    <FontAwesome name="envelope-open"  size={18} color="#27ae60"/>
    <Text style={{marginLeft:10,fontSize:15,color:"#000"}}>{data && data.getDeliveryBoyById.email}</Text>
    </View>

    <View style={{flexDirection:"row",marginLeft:10,marginTop:5}}>
    <FontAwesome name="phone"  size={18} color="#27ae60"/>
    <Text style={{marginLeft:10,fontSize:15,color:"#000"}}>{data && data.getDeliveryBoyById.contact}</Text>
    </View>
    </View>


   <View style={{flexDirection:"column",marginTop:10}}>
   


   <View style={{flexDirection:"row",marginTop:5}}>
   <FontAwesome name="map-marker"  size={18} color="#27ae60" style={{marginLeft:10}}/>
   <Text style={{marginLeft:5,color:"#000"}}> {data && data.getDeliveryBoyById.address} {data && data.getDeliveryBoyById.pincode} {data && data.getDeliveryBoyById.city}
   {data && data.getDeliveryBoyById.state}
   </Text>
   </View>

   <View style={{flexDirection:"row",marginTop:5}}>
   <FontAwesome name="calendar"  size={18} color="#27ae60" style={{marginLeft:10}}/>
   <Text style={{marginLeft:5,color:"#000"}}><Moment element={Text} format='DD-MM-YYYY'>{data && data.getDeliveryBoyById.createDateTime}</Moment> </Text>
   </View>


   <View style={{flexDirection:"row",marginTop:5}}>
   <Text style={{marginLeft:10,color:"#2ecc71",fontWeight:"bold"}}>Id Proof :</Text>
   <Text style={{marginLeft:10,fontSize:15,color:"#000",marginLeft:10}}>{data && data.getDeliveryBoyById.idType}</Text>
   </View>

   <View style={{flexDirection:"row",marginTop:5}}>
   <Text style={{marginLeft:10,color:"#2ecc71",fontWeight:"bold"}}>Id Number :</Text>
   <Text style={{marginLeft:10,fontSize:15,color:"#000",marginLeft:10}}>{data && data.getDeliveryBoyById.idNo}</Text>
   </View>
   </View>


   <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:50}}>
    <TouchableOpacity onPress={()=>handleDelete(data && data.getDeliveryBoyById.id)}>
     <View style={{width:150,height:40,justifyContent:"center",alignItems:"center",backgroundColor:"red",flexDirection:"row",borderRadius:10}}>
     <FontAwesome name="trash-o"  size={18} color="#fff" />
     <Text style={{color:"#fff",marginLeft:5}}>Delete</Text>
     </View>
     </TouchableOpacity>
   </View>


    </View>
  )
}