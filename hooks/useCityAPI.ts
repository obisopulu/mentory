const cityAPIKey = process.env.EXPO_PUBLIC_CITY_API_KEY

export const getSuggestions = async (newText: string) => {
  const cityURL = `http://api.geonames.org/searchJSON?q=${newText}&startWith=${newText}&maxRows=1000&username=${cityAPIKey}`
  try {
      const response = await fetch(cityURL);
      const data = await response.json();

      if (data.geonames.length) {
        const uniqueItems = new Set<string>();

        const transformed = data.geonames
          .filter(
            (item: Geoname) =>
              item.name.toLowerCase().includes(newText.toLowerCase()) &&
              !uniqueItems.has(`${item.name}-${item.countryName}`) &&
              uniqueItems.add(`${item.name}-${item.countryName}`)
          )
          .slice(0, 5)
          .map((item: Geoname) => ({
            city: item.name.length > 20 ? item.name.slice(0, 20) : item.name,
            country: item.countryName.length > 20 ? item.countryName.slice(0, 20) : item.countryName,
            latitude: item.lat,
            longitude: item.lng,
          }));
    
        setTransformedData(transformed);
        console.log(transformed)
      } else {
          Alert.alert('Error', 'Failed to fetch address');
      }
  } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while fetching the address');
  }
  setAddress(address)
};