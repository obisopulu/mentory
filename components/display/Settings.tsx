import { Link } from 'expo-router';
import { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SettingsIcon from '@/assets/icons/SettingsIcon';
import Toggle from './Toggle';

export default function Settings() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unit of measurement</Text>
      <Toggle />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  text: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    fontSize: 16, 
  },
});