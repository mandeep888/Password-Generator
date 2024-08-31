import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4,"The length should be atleast 4.").max(16,"Length can't exceed 16").required("This is required")
}) 
export default function App() {

  //initialising all the state variables
  const [password,setPassword] = useState('')
  const [isPasswordGenerated,setIsPasswordGenerated] = useState(false)
  const [lowercase,setLowercase] = useState(true)
  const [uppercase,setUppercase] = useState(false)
  const [number,setNumber] = useState(false)
  const [symbols,setSymbols] = useState(false)

  //function to generate password
  const generatePassword = (passwordLength:number)=>{
    let characterList = ''
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numbersChars = '1234567890'
    const symbolsChars = '!@#$%^&*()'

    if (uppercase){
      characterList += uppercaseChars;
    }
    if (lowercase){
      characterList += lowercaseChars;
    }
    if (number){
      characterList += numbersChars;
    }
    if (symbols){
      characterList += symbolsChars;
    }

    const passwoprdResult = createPassword(characterList,passwordLength)
    setPassword(passwoprdResult)
    setIsPasswordGenerated(true)
  }

  const createPassword = (characterList:string,passwordLength:number)=>{
    let result='';
    for (let index = 0; index < passwordLength; index++) {
      let characterIndex = Math.round(Math.random() * characterList.length)
      result += characterList.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordState = ()=>{
    setPassword('')
    setIsPasswordGenerated(false)
    setLowercase(true)
    setUppercase(false)
    setNumber(false)
    setSymbols(false)
  }
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})