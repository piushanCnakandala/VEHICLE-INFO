import { View,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Divider,Image ,Fab,Box}from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function VehicleInfo({navigation,route}) {

  const [vehicleBrand,setvehicleBrandNmae]=useState('');
  const [vehicleRegistrationNumber,setregisterNumber]=useState('');


    useEffect(() => {
      setvehicleBrandNmae(route.params.obj.vehicleBrand)
      setregisterNumber(route.params.obj.vehicleRegistrationNumber)
    })


  return (
    <View style={styles.container}>
      <NativeBaseProvider>
      <Fab onPress={()=>{navigation.navigate("VehicleInfo")}} renderInPortal={false} shadow={2} bottom={90}  size="sm" icon={<Ionicons color="white" name={"create-outline"} size={18} onPress={()=>{navigation.navigate("Update")}}/>} />
      <Fab onPress={()=>{navigation.navigate("VehicleInfo")}} renderInPortal={false} shadow={2}  size="sm" icon={<Ionicons color="white" name={"trash-outline"} size={18} onPress={()=>{navigation.navigate("Home")}} />} />
      

     <VStack space={4} alignItems="center" mt="10%">
     <Text bold fontSize="xl" color="indigo.600"> Vehicle Infomaion</Text>

     <Box mt="5%" height="20%" width="50%" alignSelf="center" borderWidth="2" borderColor="indigo.400" borderRadius="20" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
    }}></Box>
    
        <Text top="10px" left="-92" bold fontSize="sm" color="indigo.400">Vehicle Brand Name</Text>
        <Input  bottom="2" w="80%" variant="underlined" placeholder="Vehicle Brand Name" value={vehicleBrand}
                onChangeText={(e)=>{
                  setvehicleBrandNmae(e)
                }} />
        <Text top="0px" left="-92" bold fontSize="sm" color="indigo.400">Registation Number</Text>
        <Input  bottom="5" w="80%" variant="underlined" placeholder="Enter Registation Number"   value={vehicleRegistrationNumber}
                onChangeText={(e)=>{
                  setregisterNumber(e)
                }}/>
        <Text top="-23px" left="-100" bold fontSize="sm" color="indigo.400">Other Infomation</Text>
        <Input bottom="79" w="80%" h="20%" variant="underlined" placeholder="Enter Other Infomation" />
        

     </VStack>
      </NativeBaseProvider> 
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
      flex: 1,
    }
  })