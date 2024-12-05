import React from 'react';
import { TextInput, StyleSheet, View, Pressable, Text } from 'react-native';

export default function MyTextInput() {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="enter location"
        placeholderTextColor="#888" // Optional: Customize placeholder color
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
  text: {
    width:30,
    fontSize: 24,
  },
  button: {
  },
  input: {
    width:'80%',
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
  }
});