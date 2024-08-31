import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4,"The length should be atleast 4.").max(16,"Length can't exceed 16").required("This is required")
}) 
export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})