import React, { useState, useEffect } from 'react';

import { Button, View, Text, StyleSheet, Alert, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const [info, setInfo] = useState({name:'',email:'', userType:''});
    const [name, setName] = useState('');
    const [email,setEmail] = useState('')
    const [userType, setUserType] = useState('');
  
  
    useEffect(() => {getData()}
             ,[])
  
    const getData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('@profile_info')
            let data = null
            if (jsonValue!=null) {
              data = JSON.parse(jsonValue)
              setInfo(data)
              setName(data.name)
              setEmail(data.email)
              setUserType(data.userType)
            } else {
              setInfo({})
              setName("")
              setEmail("")
              setUserType("")
            }
  
  
          } catch(e) {
          }
    }
  
    const storeData = async (value) => {
          try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@profile_info', jsonValue)
          } catch (e) {
          }
    }
  
    const clearAll = async () => {
          try {
            await AsyncStorage.clear()
          } catch(e) {
          }
    }
  
        return (
              <View style={{alignItems:'center', flex:16, backgroundColor:'black', justifyContent:'center'}}>
                <TextInput
                      style={styles.textinput}
                      placeholder="name"
                      placeholderTextColor="lightblue"
                      onChangeText={text => {
                        setName(text)
                      }}
                      value={name}
                  />
                <TextInput
                      style={styles.textinput}
                      placeholder="email"
                      placeholderTextColor="lightblue"
                      onChangeText={text => {setEmail(text)}}
                      value={email}
                  />
                  <TextInput
                      style={styles.textinput}
                      placeholder="guest or host"
                      placeholderTextColor="lightblue"
                      onChangeText={text => {setUserType(text)}}
                      value={userType}
                  />
                <View style={{flexDirection:'row', backgroundColor:'black', }}>
                  <Button
                      color='blue' title='STORE'
                      onPress = {() => {
                           const theInfo = {name:name,email:email, userType:userType}
                           setInfo(theInfo)
                           storeData(theInfo)
                         }}
                  />
                  <Button
                      color='darkblue' title='LOAD'
                      onPress = {() => {
                            getData()
                          }}
                  />
                  <Button
                      color='darkred' title='CLEAR'
                      onPress = {() => {
                            clearAll()
                          }}
                  />
                </View>
                <Text style={styles.paragraph}>
                 name={name} email={email} user type={userType} info={JSON.stringify(info)}
                </Text>
  
              </View>
        );
      }

      export default Profile;

      const styles = StyleSheet.create({
        
        paragraph: {
          fontSize: 15,
          color: 'white',
          width: 1000,
        },
        textinput: {
          color: 'lightblue'
        },
      });