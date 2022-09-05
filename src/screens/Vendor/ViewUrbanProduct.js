import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useQuery } from '@apollo/client'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { QUERY_GET_ALL_PRODUCT_VENDOR_BY_ID } from '../../Queries'

export default function ViewUrbanProduct({navigation,route}) {

    const {vendorId}  =route.params; 

    console.log(vendorId)
  
      const{data,loading} = useQuery(QUERY_GET_ALL_PRODUCT_VENDOR_BY_ID,{
          variables:{
              "vendorId": `${vendorId}`,
          }
      })
  
      console.log(data)
  
  return (
    <ScrollView>
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20, marginLeft: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={20} color="#11A05F" style={{ marginHorizontal: 5 }} />
      </TouchableOpacity>
    </View>

    {
      data && data.getAllProductVendorById.length === 0 ?
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Image source={{uri:"https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?w=740&t=st=1662380557~exp=1662381157~hmac=07a8deb0a7a3c7d53bb5a6f584666a8fec7d3b7c6a36d98c2880da32bae05fb8"}} style={{ width: 220, height: 250 }} />
        </View>
        :
        <>

          {
            loading ?
              <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
                <ActivityIndicator color="#000" size="large" />
                <Text>Please Wait Loading </Text>
              </View>
              :
              <>
                <View style={styles.body}>

                  {data && data.getAllProductVendorById.map(product => {
                    return (
                      <TouchableOpacity onPress={() => navigation.navigate("VendorProductDetail", { userId: product.id })}>
                        <View style={styles.Boxstyle}>
                          <View style={styles.ImgBox} >
                            {
                              product.productImages.length === 0 ?
                                <Image style={styles.styleImg}
                                  source={{ uri: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" }}
                                />
                                :
                                <>
                                  <Image style={styles.styleImg}
                                    source={{ uri: `https://byaahlagan-profile-image.s3.us-east-2.amazonaws.com/${product.productImages[0]}` }}
                                  />
                                </>


                            }
                          </View>
                          <View style={styles.detailBox} >
                            <Text style={styles.txtN}>{product.productName}</Text>
                            <Text style={styles.txtN}>{product.productDescription}</Text>
                            <Text style={styles.txtN}>Price :{product.productionSellingPrice} </Text>

                          </View>
                        </View>
                      </TouchableOpacity>
                    )


                  })}

                </View>


              </>

          }

        </>
    }
  </ScrollView>
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