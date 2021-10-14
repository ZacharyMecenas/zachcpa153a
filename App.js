import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

function PhotoID  ({name,imageurl})  {
  const [image,setImage] = React.useState(imageurl)
  const [editing,setEditing] = React.useState(true)

  let editView =
    <TextInput
        style={{ fontSize: 14, color: 'yellow'}}
        placeholder="Image url..."
        onChangeText={text => {setImage(text)}}
    />

  return (
    <View style= {{flexDirection:'column', flex: 1}}>

        <View style= {{flex: 4,}}>
            <Image source={{uri:image}}
                 style={{width:'100%',height:'100%'}}/>
        </View>
         <View style= {{flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
           <Text style={{fontSize:48}}>{name}</Text>
           {editing?editView:""}
           <Button title="edit" onPress={()=> setEditing(!editing)} />
      </View>
    </View>
  )}

function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      <View style = {{flex:1, backgroundColor:'darkblue', justifyContent : 'center', alignItems : 'center'}}>
        <View style={styles.header}>
          <Button
            title="About"
            onPress={() => navigation.navigate('About')}
          />
          <Button
            title="Settings"
            onPress={() => navigation.navigate('Settings')}
          />
          <Button
            title="Profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>
      <View style={{flex:16, flexDirection: 'column', backgroundColor: 'black', justifyContent: 'flex-end'}}>
        
        <PhotoID style={{flex: 10, width: 3000}} name="" 
        imageurl="https://media.istockphoto.com/photos/nicelooking-attractive-gorgeous-glamorous-elegant-stylish-cheerful-picture-id1165055006?k=20&m=1165055006&s=612x612&w=0&h=OD4-_BceL_R2eaaBzDQrXNIyydwYXOJX-m-0z12z17s="/>
      </View>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About</Text>
      </View>
      <View style={styles.screenContainer}>
        <Text style={styles.paragraph}>
          In it's current iteration, the purpose of this app is to help catalogue/organize information 
          for events to help hosts manage their gatherings. Future features I am considering implementing 
          would be a mechanism for sending notifications to guests, possibly by email. Also, a way for guests to rsvp
          to events and a list viewed by hosts that lists those replies. I also would like the app to display event details
          like location, time, and decorum to invited guests. Lastly, I have also included tentative features in the Settings page
          that are not yet functional.
        </Text>
      </View>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Profile/>
    </View>
  );
}

function Profile() {
  const [info, setInfo] = useState({name:'',email:''});
  const [name, setName] = useState('');
  const [email,setEmail] = useState('')


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
          } else {
            setInfo({})
            setName("")
            setEmail("")
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
              <View style={{flexDirection:'row', backgroundColor:'black'}}>
                <Button
                    color='blue' title='Save Profile to Memory'
                    onPress = {() => {
                         const theInfo = {name:name,email:email}
                         setInfo(theInfo)
                         storeData(theInfo)
                       }}
                />
                <Button
                    color='darkblue' title='Load Profile from Memory'
                    onPress = {() => {
                          getData()
                        }}
                />
                <Button
                    color='darkred' title='Clear memory'
                    onPress = {() => {
                          clearAll()
                        }}
                />
              </View>
              <Text style={styles.paragraph}>
               name={name} email={email} info={JSON.stringify(info)}
              </Text>

            </View>
      );
    }

function SettingFeature({name}) {
  return (
    <View style={styles.settingFeature}>
      <Text style={styles.featureText}>
        {name}
      </Text>
      <Button title="Toggle On/Off"
              onPress={() => Alert.alert("Feature coming soon...")}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <SettingFeature name="Dark Mode" />
      <SettingFeature name="Notifications" />
      <SettingFeature name="Other feature..." />
      <SettingFeature name="Other feature..." />
      <SettingFeature name="Other feature..." />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  header : {
    flex: 1,
    alignContent: 'flexEnd',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'darkblue',
    width: '25%'
  },
  headerText : {
    fontSize: 40,
    color: 'white',
  },
  screenContainer : {
    flex: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  settingFeature: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  featureText: {
    fontSize: 20,
    color: 'lightgray'
  },
  paragraph: {
    fontSize: 15,
    color: 'white',
    width: 1000,
  },
  textinput: {
    color: 'lightblue'
  },
});
