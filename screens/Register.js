import { View } from 'react-native'
import React from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Link,HStack,Avatar,Center,Divider}from 'native-base'

export default function Register() {
  return (
    <NativeBaseProvider>
        <VStack space={4} alignItems="center" mt="10%">
        <Text bold fontSize="3xl" color="indigo.600">Register</Text>

        <Text top="40px" marginRight="62%" bold fontSize="sm" color="indigo.400">User Name</Text>
        <Input  mt="6%" w="80%" variant="underlined" placeholder="Enter User Name" />
        <Text top="20px" marginRight="71%" bold fontSize="sm" color="indigo.400">Email</Text>
        <Input w="80%" variant="underlined" placeholder="Enter Email" />
        <Text top="20px" marginRight="65%" bold fontSize="sm" color="indigo.400">Password</Text>
        <Input w="80%" variant="underlined" placeholder="Enter Password" />
        <Button mt="5%" w="50%" h="10%" backgroundColor="indigo.600" borderRadius="20" size="sm">Create account</Button>
        </VStack>

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