import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Pressable, Text, Platform} from 'react-native';

import { TransformedData } from '@/utils/types';
import { getSuggestions } from '@/utils/getSuggestions';
import { useAppContext } from '@/context/AppContext';

export default function InputPanel() {
  const {context, updateWeatherInfo} = useAppContext()

  const [textInput, setTextInput] = useState<string | undefined>('');
  const [transformedData, setTransformedData] = useState<TransformedData[]>();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (transformedData && transformedData.length > 0) {
      timer = setTimeout(() => {
        setTransformedData([]);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [transformedData]);


  const handleOnChange = async (newText: string) => {
    setTextInput(newText)
    setTransformedData( await getSuggestions(newText, true))
  }

  const handleButtonClick = async () => {
    const gpsData = await getSuggestions(textInput, false)
    updateWeatherInfo(gpsData.lat, gpsData.lng)
  }

  return (
    <View style={styles.container}>
      {transformedData && Array.isArray(transformedData) && (
        <View style={styles.suggestionsList}>
          { transformedData.map(( item, index ) => 
            <Text key={index} style={styles.suggestion} onPress={(e) => {updateWeatherInfo(item.latitude, item.longitude); setTextInput(item.city + ', ' + item.country + '.')}}>{item.city}, {item.country}</Text>
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
        onPress={() => {updateWeatherInfo(0, 0), setTextInput((context.city))}}
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
        onPress={handleButtonClick}
      >
        <Text style={styles.text}>&#10140;</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  textLocation: {
    color:'#144884',
    fontSize: 24,
  },
  buttonLocation: {
    paddingLeft: 5,
  },
  button: {
  },
  text: {
    color:'#144884',
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