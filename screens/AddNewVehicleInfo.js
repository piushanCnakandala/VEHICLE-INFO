import { View,StyleSheet } from 'react-native'
import React from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Divider,Image,Box}from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AddNewVehicleInfo() {
  return (
    <View style={styles.container}>
     <NativeBaseProvider>
     <VStack space={4} alignItems="center" mt="10%">
     <Text bold fontSize="xl" color="indigo.600">Add New Vehicle Infomaion</Text>

     <Box mt="5%" height="20%" width="50%" alignSelf="center" bg="primary.600" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
    }} icon={<Ionicons color="black" name={"duplicate-outline"} size={18}/>}>
        This is a
      </Box>
    
      <Text top="30px" marginRight="62%" bold fontSize="sm" color="indigo.400">User Name</Text>
        <Input  mt="6%" w="80%" variant="underlined" placeholder="Enter User Name" />
        <Text top="20px" marginRight="71%" bold fontSize="sm" color="indigo.400">Email</Text>
        <Input w="80%" variant="underlined" placeholder="Enter Email" />
        <Text top="20px" marginRight="65%" bold fontSize="sm" color="indigo.400">Password</Text>
        <Input w="80%" variant="underlined" placeholder="Enter Password" />
        <Button mt="5%" w="50%" h="8%" backgroundColor="indigo.600" borderRadius="20" size="sm">Create account</Button>

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