import { View, StyleSheet, Text } from 'react-native';
import TempertureUnit from '@/assets/icons/TemperatureUnit';
import WeatherWidget from './WeatherWidget';

interface WeatherHeaderProps {
  city?: string;
  weather?:'sunny' | 'snow' | 'cloudy' | 'rain' | 'fog';
  temperature?: number;
  unit?: 'c' | 'f';
}

export default function WeatherHeader(props: WeatherHeaderProps) {
  
  return (
    <View>
      <Text style={styles.city}>{props?.city || 'no data'}</Text> 
      <View style={styles.weatherHeader}>
        <WeatherWidget weather={props?.weather} />
        <View style={styles.weatherValue}>
          <Text style={styles.text}>{props?.temperature || '0'}</Text>
          <TempertureUnit unit={props?.unit || 'c'} />
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
    paddingLeft: 0,
    paddingTop: 0,
  },
  text: {
    fontFamily: 'interExtraLight',
    fontSize: 72,
  },
  city: {
    fontFamily: 'interExtraLight',
    fontSize: 18,
    paddingLeft: 60,
    paddingBottom: 10,
  },
});
