import WeatherHeader from '@/components/display/WeatherHeader';
import SettingsButton from '@/components/display/SettingsButton';
import InputPanel from '@/components/input/InputPanel';
import Details from '@/components/display/DetailsButton';
import { ScrollView } from 'react-native';
import Header from '@/components/display/Header';

import { useEffect } from 'react';
import { getDeviceLocation } from '@/utils/getDeviceLocation';
import { useAppContext } from '@/context/AppContext';
import FooterIcon from '@/assets/icons/FooterIcon';

export default function HomeScreen() {
  const {context, updateWeatherInfo} = useAppContext()

  useEffect(()=>{
    ( async () => {
      const gpsData = await getDeviceLocation()
      gpsData && updateWeatherInfo(gpsData.lat, gpsData.lng)
    })()
  }, [])

  return (
    <ScrollView>
      <SettingsButton />
      <Header heading='Weather' />
      <WeatherHeader city={context.city} temperature={context.temperature} unit={context.unit} weather={context.weather} />
      <InputPanel />
      <Details />
      <FooterIcon />
    </ScrollView>
  );
}