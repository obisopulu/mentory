import { Link } from 'expo-router';
import { ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SettingsIcon from '@/assets/icons/SettingsIcon';

interface HeaderProps {
  heading?: string,
}
export default function Header({heading}: HeaderProps) {

  
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
    paddingTop: 60,
    padding: 30,
    paddingHorizontal: 60,
    borderRadius: 8,
  }
});