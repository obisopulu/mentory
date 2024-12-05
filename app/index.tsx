import TempInCelsius from '@/assets/icons/TempInCelsius';
import MyText from '@/components/display/MyText';
import WeatherHeader from '@/components/display/WeatherHeader';
import SettingsButton from '@/components/display/SettingsButton';
import Details from '@/components/display/DetailsButton';
import TextInput from '@/components/input/MyTextInput';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Header from '@/components/display/Header';

export default function HomeScreen() {
  return (
    <ScrollView>
      <SettingsButton />
      <Header heading='Weather' />
      <WeatherHeader />
      <TextInput />
      <Details />
    </ScrollView>
  );
}