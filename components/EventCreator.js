import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, Image } from 'react-native';
import EventProvider from './EventContext';
import EventInfo from './EventInfo';


const Creator = () => {
    const data = {status:'host', time:'10:00 AM Thursday December 12th 2021', location:'593 Cherry St'}

    return (
        <EventProvider value={data}>
            <EventInfo />
        </EventProvider>
    )
}

export default Creator