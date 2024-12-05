import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Pressable, Text, Platform, Button, Alert, FlatList } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import { Geoname, TransformedData } from '@/utils/types';
type LatLong = {
  lat: number;
  long: number;
};

export default function MyTextInput() {

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [address, setAddress] = useState<string | undefined>();
  const [textInput, setTextInput] = useState<string>('');
  const [weatherData, SetWeatherData] = useState<object | undefined>();
  const [transformedData, setTransformedData] = useState<TransformedData[]>();
  
  const [tempLatLong, setTempLatLong] = useState<LatLong>({lat: 0, long: 0});

  const handleOnChange = (newText: string) => {
    setTextInput(newText)
    getSuggestions(newText)
  }

  return (
    <View style={styles.container}>
      {transformedData && (
        <View style={styles.suggestionsList}>
          { transformedData.map(( item, index ) => 
            <Text key={index} style={styles.suggestion} onPress={(e) => getLocation(item.latitude, item.longitude, item.city + ', ' + item.country + '.')}>{item.city}, {item.country}</Text>
          )}
        </View>
      )}
      <Pressable
        style={({ pressed }) => [
          styles.buttonLocation,
          {
            opacity: pressed ? 0.5 : 1,
            elevation: pressed ? 2 : 4,
          },
        ]} 
        onPress={() => getLocation(0, 0, '')}
      >
        <Text style={styles.textLocation}>&#9737;</Text>
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="enter location"
        placeholderTextColor="#888"
        onChangeText={(newText) => handleOnChange(newText)}
        value={textInput}
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? 0.5 : 1,
            elevation: pressed ? 2 : 4,
          },
        ]} 
        onPress={() => getLocation(tempLatLong.lat, tempLatLong.long, textInput)}
      >
        <Text style={styles.text}>&#10140;</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  textLocation: {
    color:'#008080',
    fontSize: 24,
  },
  buttonLocation: {
    paddingLeft: 5,
  },
  button: {
  },
  text: {
    width:30,
    fontSize: 24,
  },
  input: {
    width:Platform.OS === 'ios' ? '70%' : '80%',
    padding: 8,
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    marginTop: 10,
    padding: 5,
    marginHorizontal: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#eaeaea',
  },
  suggestionsList: {
    width: 'auto',
    position: 'absolute',
    bottom: 45,
    right: 0,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    marginLeft: -5,
    padding: 5,
  },
  suggestion: {
    padding: 7,
    backgroundColor: '#fafafa',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 4,
  },
});