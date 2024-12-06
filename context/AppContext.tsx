import { convertTemperature } from '@/utils/convertTemperature';
import { getWeatherInfo } from '@/utils/getWeatherInfo';
import { getStorageData, setStorageData} from '@/utils/storage'

import React, { ReactNode, useContext, useState, createContext } from 'react'

interface Context {
  city?: string;
  weather?: "sunny" | "snow" | "rain" | "fog";
  temperature?: number,
  unit?: 'c' | 'f';
  humidity?: number,
  wind_speed?: string,
  visibility?: number,
  sunriseSunset?: string,
  kelvin?: number,
}

type AppContextType = {context: Context; updateWeatherInfo: (lat: number, long: number) => void; updateUnit: ( unit: 'c' | 'f' ) => void}

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const {context, updateWeatherInfo, updateUnit} = useContext(AppContext) as AppContextType;
  return {context, updateWeatherInfo, updateUnit};
}

export const AppProvider = ({children}: {children: ReactNode}) => {
  const [context, setContext] = useState<Context>({
    city: undefined,
    weather: undefined,
    temperature: undefined,
    unit: undefined,
    humidity: undefined,
    wind_speed: undefined,
    visibility: undefined,
    sunriseSunset: undefined,
    kelvin: undefined,
  });

  const updateWeatherInfo = async (lat: number, long: number) => {
    const weather = await getWeatherInfo(lat, long);
    if((weather as {data: Context})?.data) {
      const data = (weather as {data: Context})?.data
      const storedUnit = await getStorageData('unit')
      const unit = storedUnit == 'f' ? 'f' : 'c'
      const temperature = convertTemperature(unit, data.kelvin!)
      setContext(prev => ({...prev, ...data, temperature, unit}))
    }
  }
  
  const updateUnit = async ( unit: 'c' | 'f' ) => {
    const temperature = convertTemperature(unit, context.kelvin!)
    setContext(prev => ({...prev, temperature, unit}))

    await setStorageData('unit', unit)
  }

  /* const contextValue = useMemo(() => ({
    currentUser,
    login
  }), [currentUser, login]); */

  return (
    <AppContext.Provider value={{context, updateWeatherInfo, updateUnit}}>{ children }</AppContext.Provider>
  )
}