import Header from '@/components/display/Header';
import WeatherHeader from '@/components/display/WeatherHeader';
import { StyleSheet, Image, Platform, View } from 'react-native';
import SettingsButton from '@/components/display/SettingsButton';
import AdditionalDataList from '@/components/display/AdditionalDataList';


export default function TabTwoScreen() {
  const additionalData = [
    { 'name': 'Humidity', 'value': '20%' },
    { 'name': 'Wind Speed', 'value': '120 km/h' },
    { 'name': 'Sunset7 Sunrise', 'value': '10AM - 6PM' },
  ]

  return (
    <View>
      <SettingsButton />
      <Header heading='Details' />
      <WeatherHeader />
      <AdditionalDataList additionalData={additionalData} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
