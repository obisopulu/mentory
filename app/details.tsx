import Header from '@/components/display/Header';
import WeatherHeader from '@/components/display/WeatherHeader';
import { ScrollView } from 'react-native';
import SettingsButton from '@/components/display/SettingsButton';
import AdditionalDataList from '@/components/display/AdditionalDataList';
import { useAppContext } from '@/context/AppContext';
import { formatWeatherData } from '@/utils/getWeatherInfo';


export default function DetailsScreen() {
  const {context} = useAppContext()

  const weatherData = {
    main: { humidity: context.humidity },
    wind: { speed: context.wind_speed },
    visibility: context.visibility,
    sys: { sunriseSunset: context.sunriseSunset}
  }

  const additionalData = formatWeatherData(weatherData);
  
  return (
    <ScrollView>
      <SettingsButton />
      <Header heading='Details' />
      <WeatherHeader city={context.city} temperature={context.temperature} unit={context.unit} weather={context.weather} />
      <AdditionalDataList additionalData={additionalData} />
    </ScrollView>
  );
}