import Header from '@/components/display/Header';
import Settings from '@/components/display/Settings';
import { StyleSheet, Image, Platform, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View>
      <Header heading='Settings' />
      <Settings />
    </View>
  );
}
