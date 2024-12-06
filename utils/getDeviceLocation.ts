import * as Location from 'expo-location';

export const getDeviceLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status === 'granted') {
    let location = await Location.getCurrentPositionAsync();      
    return {lat: location?.coords.latitude, lng: location?.coords.longitude}
  }
  return null
}