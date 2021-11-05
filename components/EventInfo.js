import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, Image } from 'react-native';
import {useValue} from './EventContext';
import GuestList from './GuestList';

const EventInfo = () => {
    const {currentValue} = useValue();
    const status = currentValue.status
    const time = currentValue.time
    const location = currentValue.location

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Event Info
                </Text>
            </View>
            <View style={styles.screenContainer}>
                <Text style={styles.featureText}>
                    Status: {status} {'\n'}
                    Time: {time} {'\n'}
                    Location: {location} {'\n'}
                </Text>
                <GuestList />
            </View>
        </View>
    )
}

export default EventInfo

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