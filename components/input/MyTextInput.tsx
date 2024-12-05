import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Pressable, Text, Platform, Button, Alert, FlatList } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import { Geoname, TransformedData } from '@/utils/types';

export default function MyTextInput() {
  
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [address, setAddress] = useState<string | undefined>();
  const [textInput, setTextInput] = useState<string>('');
  const [weatherData, SetWeatherData] = useState<object | undefined>();
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [transformedData, setTransformedData] = useState<TransformedData[]>();

    //const CITY_API_KEY ='AIzaSyDBCsTLtkQu6WQI1jXcLqmTkMCFvv7KOO
    //const CITY_API_KEY ='AIzaSyAtP925e1fnU9RIsz86c4TJdqRdw3pWLnA'

    
  const getSuggestions = async (newText: string) => {
    const cityURL = `http://api.geonames.org/searchJSON?q=${newText}&startWith=${newText}&maxRows=5&username=softryn`
    try {
        const response = await fetch(cityURL);
        const data = await response.json();

        if (data.geonames.length) {
          const transformed = data.geonames.map((item: Geoname) => ({
            city: item.name.slice(0, 20),
            country: item.countryName.slice(0, 20),
            latitude: item.lat,
            longitude: item.lng
          }));
      
          setTransformedData(transformed);
          console.log(transformed)
        } else {
            Alert.alert('Error', 'Failed to fetch address');
        }
    } catch (error) {
        console.error(error);
        Alert.alert('Error', 'An error occurred while fetching the address');
    }
    setAddress(address)
  };

  const getLocation = async (latitude: number, longitude: number, city: string) => {
    setTransformedData([])
    setAddress(city)

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    if (latitude + longitude < 1) {
      let location = await Location.getCurrentPositionAsync({});
      latitude = location?.coords.latitude
      longitude = location?.coords.longitude
    }

    const WEATHER_API_KEY = '996c1a4b00d3ac43d7e9def15bf6e1b4'; // Replace with your API Key
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();
        console.log(data, 'x')

        if (data.name) {
          
          setAddress(data.name)

          SetWeatherData({
            name: data.name,
            weather: data.weather[0].main,
            temperature: data.main.temp - 273.15,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            visibility: data.visibility / 1000,  // Convert to km
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
          });
          console.log(data, 'x')
        } else {
            Alert.alert('Error', 'Failed to fetch address');
        }
    } catch (error) {
        console.error(error);
        Alert.alert('Error', 'An error occurred while fetching the address');
    }
  }

  const handleOnChange = (newText: string) => {
    setTextInput(newText)
    getSuggestions(newText)
  }

  return (
    <View style={styles.container}>
      {transformedData && (
        <View style={styles.suggestionsList}>
          { transformedData.map(( item, index ) => 
            <Text key={index} style={styles.suggestion} onPress={(e) => getLocation(item.latitude, item.longitude, item.city)}>{item.city}, {item.country}</Text>
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
        onPress={() => console.log()}
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