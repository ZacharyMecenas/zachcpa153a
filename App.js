import * as React from 'react';
import { Button, View, Text, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Button
          title="About"
          onPress={() => navigation.navigate('About')}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <View style={styles.screenContainer}>

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  header : {
    flex: 1,
    alignContent: 'flexEnd',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'darkblue'
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
});
