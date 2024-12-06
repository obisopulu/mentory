import Header from '@/components/display/Header';
import Settings from '@/components/display/Settings';
import { View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View>
      <Header heading='Settings' />
      <Settings />
    </View>
  );
}
