import { Link } from 'expo-router';
import { ReactNode } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import SettingsIcon from '@/assets/icons/SettingsIcon';

export default function SettingsButton() {

  return (
    <Link style={styles.button} href={'/settings'}>
      <SettingsIcon />
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
    paddingTop: Platform.OS === 'ios' ? 70 : 60,
    padding: 30,
    borderRadius: 8,
  }
});