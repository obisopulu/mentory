import { router } from 'expo-router';
import { ReactNode } from 'react';
import { View, StyleSheet, Platform, Text, Pressable } from 'react-native';

export default function DetailsButton() {

  
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? 0.5 : 1,
            elevation: pressed ? 2 : 4,
          },
        ]} 
        onPress={() => router.push({
          pathname: '/details',
        })}
      >
        <Text style={styles.text}>Details</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 60,
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'black',
  }
});