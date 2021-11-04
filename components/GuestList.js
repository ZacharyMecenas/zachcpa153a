import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, Image, FlatList, ListViewBase } from 'react-native';
import testJson from '../test-guest-list.json'

const GuestList = () => {

    const Item = ({ title }) => (
        <View style={{backgroundColor:'lightgray',justifyContent:'center', alignItems: 'center', padding: 10, marginVertical:5, marginHorizontal: 50}}>
          <Text style={{fontSize:15}}>{title}</Text>
        </View>
      );

    const renderItem = ({item}) => (
        <Item title= {item.name}/>
    );
    
    

    return (
        <View>
            <FlatList data={testJson} 
                    renderItem={renderItem}
                    keyExtractor={item => item.name}/>
        </View>
    )
}

export default GuestList