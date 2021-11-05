import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, Image } from 'react-native';

const AboutScreen = () => {
    return (
      <View style={{flex: 1}}>
        <View style = {{flex:1, backgroundColor:'darkblue', justifyContent : 'center', alignItems : 'center'}}>
          <View style={styles.header}>
            <Text style={styles.headerText}>About</Text>
          </View>
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

export default AboutScreen;

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
      fontSize: 35,
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