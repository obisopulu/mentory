import { View, StyleSheet, Text } from 'react-native';
import MyText from './MyText';
import TempInFahrenheit from '@/assets/icons/TempInFahrenheit';
import WeatherWidget from './WeatherWidget';

interface WeatherWidgetProps {
  weather: string
}

export default function WeatherHeader() {


  return (
    
    <View style={styles.weatherHeader}>
      <WeatherWidget weather='sunny' />
      <View style={styles.weatherValue}>
        <Text style={styles.text}>9</Text>
        <TempInFahrenheit />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherHeader: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 30,
  },
  weatherValue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontFamily: 'interExtraLight',
    fontSize: 64,
  },
});
