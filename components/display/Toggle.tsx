import { useState } from 'react';
import { View, StyleSheet, Platform, Text, Pressable } from 'react-native';

export default function Toggle() {
  const [toggleValue, setToggleValue] = useState<string>('c');

  
  return (
    <View style={styles.container}>
    <Pressable
      style={({ pressed }) => [
        [styles.button, styles.left, styles.selected],
        {
          opacity: pressed ? 0.5 : 1,
          elevation: pressed ? 2 : 4,
        },
      ]} 
      onPress={() => alert('Pressable Pressed!')}
    >
     <Text style={[styles.text, styles.selected]}>&#8451;</Text>
    </Pressable>
    <Pressable
      style={({ pressed }) => [
        [styles.button, styles.right],
        {
          opacity: pressed ? 0.5 : 1,
          elevation: pressed ? 2 : 4,
        },
      ]} 
      onPress={() => alert('Pressable Pressed!')}
    >
     <Text style={[styles.text]}>&#8457;</Text>
    </Pressable>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%', 
    backgroundColor: '#ddd', 
    borderRadius: 12, 
    marginHorizontal: 30,
    display: 'flex', 
    flexDirection: 'row', 
    alignContent: 'stretch',
    borderWidth: 1,
    borderColor: '#AAA'
  },
  button: {
    width: '50%', 
    textAlign: 'center', 
    padding: 10,
    fontSize: 18
  },
  text: {
    textAlign: 'center', 
  },
  left: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  right: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  selected: {
    backgroundColor: '#FF3333',
    color: 'white'
  }
});