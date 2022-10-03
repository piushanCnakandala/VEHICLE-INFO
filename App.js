import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <NavigationContainer>
       <Login/>
    </NavigationContainer>
  
  )
}