import AsyncStorage from '@react-native-async-storage/async-storage';
const storageKey = process.env.EXPO_PUBLIC_STORAGE_KEY

export const setStorageData = async (key: string, value: unknown) => {
  try {
    await AsyncStorage.setItem(`${storageKey}/${key}`, String(value));
  } catch (e) {
    console.log(e)
  }
};

export const getStorageData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`${storageKey}/${key}`);
    if (value !== null) {
      return String(value);
    }
  } catch (e) {
    console.log(e)
  }
};