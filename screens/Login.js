import { View } from 'react-native'
import React from 'react'
import {NativeBaseProvider ,Text,VStack,Input}from 'native-base'

export default function Login() {
  return (
    <NativeBaseProvider>
        <VStack space={4} alignItems="center" mt="20%">
        <Text bold fontSize="3xl" color="indigo.600">Welcome !</Text>

        <Text bold fontSize="sm" color="indigo.600">Email</Text>
        <Input  mt="20%" w="80%" variant="underlined" placeholder="Underlined" />
        <Text bold fontSize="sm" color="indigo.600">Email</Text>
        <Input w="80%" variant="underlined" placeholder="Underlined" />
        </VStack>

    </NativeBaseProvider>
  )
}