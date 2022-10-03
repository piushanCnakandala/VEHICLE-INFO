import { View } from 'react-native'
import React from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Link,HStack,Avatar,Center,Divider}from 'native-base'

export default function Login() {
  return (
    <NativeBaseProvider>
        <VStack space={4} alignItems="center" mt="20%">
        <Text bold fontSize="3xl" color="indigo.600">Welcome !</Text>

        <Text top="95px" marginRight="70%" bold fontSize="sm" color="indigo.400">Email</Text>
        <Input  mt="20%" w="80%" variant="underlined" placeholder="Enter Email" />
        <Text top="20px" marginRight="65%" bold fontSize="sm" color="indigo.400">Password</Text>
        <Input w="80%" variant="underlined" placeholder="Enter Password" />
        <Button mt="5%" w="50%" h="10%" backgroundColor="indigo.600" borderRadius="20" size="sm">Login</Button>
        
           </VStack>
           <Text top="4px" left="37px" bold fontSize="xs">Don't have an account ?</Text>
          
           <Link href="" bottom="13px" left="170px" bold fontSize="xs" color="indigo.400">
           Register Now!
      </Link>

      <Divider mt="10%" left="40px" w="80px" my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
      <Text bottom="19px" left="150px"  fontSize="sm">Or continue with</Text>

      <Divider bottom="35px" left="280px" w="80px" my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />

      
    </NativeBaseProvider>
  )

}