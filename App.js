import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './components/Profile';
import SettingsScreen from './components/Settings';
import AboutScreen from './components/About';
import Creator from './components/EventCreator';

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
          <Button
            title="Event Info"
            onPress={() => navigation.navigate('Event Info')}
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



function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Profile layout="row"/>
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
        <Stack.Screen name="Event Info" component={Creator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  header : {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'darkblue',
    width: '100%'
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
    width: '90%',
  },
  textinput: {
    color: 'lightblue'
  },
});
