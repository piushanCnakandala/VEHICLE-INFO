import { View,StyleSheet,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Divider,Image,Box}from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AddNewVehicleInfo({navigation}) {

  const [vehicleBrandNmae,setvehicleBrandNmae]=useState('');
  const [registerNumber,setregisterNumber]=useState('');
  const [otherDeatils,setotherDeatils]=useState('');
  const [img,setImg]=useState('');


  const saveData=()=>{
    console.log(vehicleBrandNmae , registerNumber , otherDeatils)
    fetch('http://192.168.1.3:4000/vehicle',{
      method:'POST',
      body:JSON.stringify({
        vehicleBrandNmae:vehicleBrandNmae,
        registerNumber:registerNumber,
        otherDeatils:otherDeatils
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }

    })

    .then((response) => {
      
      Alert.alert("Vehicle Saved Successfully !")
    })
    .catch((err)=>{Alert.alert("Error occured !")})
  }

  return (
    <View style={styles.container}>
     <NativeBaseProvider>
     <VStack space={4} alignItems="center" mt="10%">
     <Text bold fontSize="xl" color="indigo.600">Add New Vehicle Infomaion</Text>

     <Box mt="5%" height="20%" width="50%" alignSelf="center" borderWidth="2" borderColor="indigo.400" borderRadius="20" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
    }} icon={<Ionicons color="black" name={"duplicate-outline"} size={18}/>}>
        This is a
      </Box>
    
        <Text top="10px" left="-92" bold fontSize="sm" color="indigo.400">Vehicle Brand Name</Text>
        <Input  bottom="2" w="80%" variant="underlined" placeholder="Vehicle Brand Name" value={vehicleBrandNmae}
                onChangeText={(e)=>{
                  setvehicleBrandNmae(e)
                }} />

        <Text top="0px" left="-92" bold fontSize="sm" color="indigo.400">Registation Number</Text>
        <Input  bottom="5" w="80%" variant="underlined" placeholder="Enter Registation Number" value={registerNumber}
                onChangeText={(e)=>{
                  setregisterNumber(e)
                }} />
        <Text top="-23px" left="-100" bold fontSize="sm" color="indigo.400">Other Infomation</Text>
        <Input bottom="79" w="80%" h="20%" variant="underlined" placeholder="Enter Other Infomation"  value={otherDeatils}
                onChangeText={(e)=>{
                  setotherDeatils(e)
                }}/>
        <Button mt="0%" w="50%" h="8%" backgroundColor="indigo.600" borderRadius="20" size="sm" onPress={saveData}>Save</Button>

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