import { View, StyleSheet } from 'react-native';
import WeatherSunny from "@/assets/icons/WeatherSunny";
import WeatherSnow from "@/assets/icons/WeatherSnow";
import WeatherCloudy from "@/assets/icons/WeatherCloudy";
import WeatherPartlyCloudy from "@/assets/icons/WeatherPartlyCloudy";
import WeatherRain from "@/assets/icons/WeatherRain";
import WeatherFog from "@/assets/icons/WeatherFog";

import { WeatherWidgetProps } from '@/utils/types';

const WeatherWidget = ({ weather }: WeatherWidgetProps) => {
  let content;
  switch (weather) {
    case 'sunny':
      content = <WeatherSunny/>
      break;
    case 'snow':
      content = <WeatherSnow/>
      break;
    case 'rain':
      content = <WeatherRain/>
      break;
    case 'fog':
      content = <WeatherFog/>
      break;
    default:
      content = <WeatherPartlyCloudy/>
      break;
  }
  return (
    <View style={styles.background}>
      {content}
    </View>
  );
};
  

  const styles = StyleSheet.create({
    background: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '50%',
      padding: 30,
      paddingTop: 0,
    },
  });

export default WeatherWidget;