import React, { useState, useEffect, useContext, createContext } from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, Image } from 'react-native';

const EventContext = createContext(null)

const EventProvider = ({value, children}) => {
    const [currentValue, setCurrentValue] = useState(value);

    return (
        <EventContext.Provider
            value={{currentValue, setCurrentValue}} >
                {children}
        </EventContext.Provider>
    )
}

export default EventProvider
export const useValue = () => useContext(EventContext)