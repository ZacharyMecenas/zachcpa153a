import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, Image } from 'react-native';

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
  
  const SettingsScreen = () => {
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

  export default SettingsScreen;

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