import MyText from '@/components/display/MyText';
import WeatherHeader from '@/components/display/WeatherHeader';
import SettingsButton from '@/components/display/SettingsButton';
import MyTextInput from '@/components/input/MyTextInput';
import Details from '@/components/display/DetailsButton';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Header from '@/components/display/Header';
import { useEffect, useState } from 'react';

import * as Location from 'expo-location';

export default function HomeScreen() {
  const [permissionGranted, setPermissionGranted] = useState(false);

  const getGPS = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync();      
      return {lat: location?.coords.latitude, lng: location?.coords.longitude}
    }
    return null
  }

  useEffect(()=>{
    ( async () => {
      const gpsData = await getGPS()
      gpsData && setPermissionGranted(true)  
    })()
  }, [])

  return (
    <ScrollView>
      <SettingsButton />
      <Header heading='Weather' />
      <WeatherHeader />
      <MyTextInput />
      <Details />
    </ScrollView>
  );
}