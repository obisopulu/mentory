import TempInCelsius from '@/assets/icons/TempInCelsius';
import MyText from '@/components/display/MyText';
import WeatherWidget from '@/components/display/WeatherWidget';
import TextInput from '@/components/input/TextInput';
import { Image, StyleSheet, Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <TextInput />
      <div style={styles.weatherHeader}>
        <WeatherWidget weather='sunny' />
        <div style={styles.weatherValue}>
          <MyText style='xl'>9</MyText>
          <TempInCelsius />
        </div>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  weatherHeader: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 120,
    padding: 30,
  },
  weatherValue: {
    display: 'flex',
    gap: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 120,
    padding: 30,
  },
});