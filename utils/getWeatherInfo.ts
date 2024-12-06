import { getDeviceLocation } from "./getDeviceLocation";

export const getWeatherInfo = async (latitude: number, longitude: number) => {
  const weatherAPIKey = process.env.EXPO_PUBLIC_WEATHER_API_KEY
  if (latitude + longitude <= 0) {
    const gpsData = await getDeviceLocation()
    latitude = Number(gpsData?.lat)
    longitude = Number(gpsData?.lng)
  }
  
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPIKey}`;
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    if (data.name) {
      return {
        data:{
          city: data.name,
          weather: data.weather[0].main.toLowerCase(),
          kelvin: data.main.temp,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          visibility: data.visibility / 1000,
          sunriseSunset: `${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
        },
      };
    }
    return {error:data}
  } catch (error){
    return error;
  }
}

export const formatWeatherData = (data: {
  main: { humidity?: number },
  wind: { speed?: string },
  visibility?: number,
  sys: { sunriseSunset?: string }
}) => {
  return [
    {
      name: 'Humidity',
      value: `${data.main.humidity}%`
    },
    {
      name: 'Wind Speed',
      value: `${(Number(data.wind.speed) * 3.6).toFixed(0)} km/h`
    },
    {
      name: 'Visibility',
      value: `${(Number(data.visibility) / 1000).toFixed(1)} km`
    },
    {
      name: 'Sunset & Sunrise',
      value: `${data.sys.sunriseSunset}`,
    }
  ];
}