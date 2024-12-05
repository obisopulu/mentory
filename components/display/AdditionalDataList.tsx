import { Link } from 'expo-router';
import { ReactNode } from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import SettingsIcon from '@/assets/icons/SettingsIcon';
import { COLOR } from '@/utils/constants';
import AdditionalData from './AdditionalData';

import { AdditionalDataListProps } from '@/utils/types';

export default function AdditionalDataList({additionalData}: AdditionalDataListProps) {

  return (
    <View style={styles.container}>
      {additionalData.map((item, index) => (
        <AdditionalData key={index} name={item.name} value={item.value} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 500
  },
});