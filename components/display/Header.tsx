import { Link } from 'expo-router';
import { ReactNode } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import SettingsIcon from '@/assets/icons/SettingsIcon';

export default function Header({heading} : {heading: string}) {

  return (
    <Text style={styles.container}>
      {heading}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    fontWeight: '100',
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 75 : Platform.OS === 'android' ? 60: 55,
    padding: 30,
    paddingHorizontal: 60,
    borderRadius: 8,
  }
});