import { View, StyleSheet, Text } from 'react-native';
import MyText from './MyText';
import TempInFahrenheit from '@/assets/icons/TempInFahrenheit';
import WeatherWidget from './WeatherWidget';

export default function WeatherHeader() {

  return (
    <View>
      <Text style={styles.city}>Chemnitz</Text>
      <View style={styles.weatherHeader}>
        <WeatherWidget weather='sunny' />
        <View style={styles.weatherValue}>
          <Text style={styles.text}>9</Text>
          <TempInFahrenheit />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 30,
    paddingTop: 0,
  },
  weatherValue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 30,
    paddingTop: 0,
  },
  text: {
    fontFamily: 'interExtraLight',
    fontSize: 108,
  },
  city: {
    fontFamily: 'interExtraLight',
    fontSize: 24,
    paddingLeft: 60,
    paddingBottom: 0,
  },
});
