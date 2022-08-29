import { View, Text , TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import {Card} from "react-native-paper"

export default function Service() {
  return (
    <View>

      <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
      <Text style={{color:"#000"}}>Delivery Boy</Text>
      </View>
     <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>

     <Card style={{width:"45%",height:"100%",marginLeft:10}}>
      <TouchableOpacity>
      <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

<Image source={{uri:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png"}}  style={{width:100,height:100,marginTop:10}}/>
    <Text style={{marginBottom:10,color:"#000"}}>All Doctor</Text>
      </View>
      </TouchableOpacity>
     </Card>
     <Card style={{width:"45%",height:"100%",marginRight:10,}}>
     <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
     <Image source={{uri:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png"}}  style={{width:100,height:100,marginTop:10}}/>
    <Text style={{color:"#000"}}>Add Service</Text>
      </View>
     </Card>

     </View>
    

    </View>
  )
}