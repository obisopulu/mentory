const weatherAPIKey = process.env.EXPO_PUBLIC_WEATHER_API_KEY

const getLocation = async (latitude: number, longitude: number, city: string) => {
  setTempLatLong({lat: latitude, long: longitude})
  setTextInput(city)
  setTransformedData([])


  if (latitude + longitude <= 0) {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    
    let location = await Location.getCurrentPositionAsync({});
    latitude = location?.coords.latitude
    longitude = location?.coords.longitude
  }

  
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPIKey}`;
  try {
      const response = await fetch(weatherURL);
      const data = await response.json();

      if (data.name) {
        
        setTextInput(data.name)

        SetWeatherData({
          name: data.name,
          weather: data.weather[0].main,
          temperature: data.main.temp - 273.15,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          visibility: data.visibility / 1000,  // Convert to km
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
        });
        console.log(data, 'x')
      } else {
          Alert.alert('Error', 'Failed to fetch address');
      }
  } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while fetching the address');
  }
}