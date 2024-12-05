import { Link } from 'expo-router';
import { ReactNode } from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import SettingsIcon from '@/assets/icons/SettingsIcon';
import { COLOR } from '@/utils/constants';

interface AdditionalDataProps {
  name: string;
  value: string;
}
export default function AdditionalData({name, value}: AdditionalDataProps) {

  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{ name }</Text>
      <Text style={styles.value}>{ value }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 'auto',
  },
  name: {
    width: '50%',
    padding: 20,
    fontSize: 16,
  },
  value: {
    paddingVertical: 20,
    fontSize: 18,
  }
});