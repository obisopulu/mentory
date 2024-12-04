import React, { ReactNode, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { COLOR } from "@/utils/constants";

interface MyTextProps {
  children: ReactNode;
  style?: string;
}

const MyText: React.FC<MyTextProps> = ({ children, style }) => {

  const [fontsLoaded] = useFonts({
    'interBlack': require('@/assets/font/interBlack.ttf'),
    'interBold': require('@/assets/font/interBold.ttf'),
    'interExtraBold': require('@/assets/font/interExtraBold.ttf'),
    'interExtraLight': require('@/assets/font/interExtraLight.ttf'),
    'interThin': require('@/assets/font/interThin.ttf'),
    'interSemiBold': require('@/assets/font/interSemiBold.ttf'),
    'interRegular': require('@/assets/font/interRegular.ttf'),
    'interMedium': require('@/assets/font/interMedium.ttf'),
    'interLight': require('@/assets/font/interLight.ttf')
  })

  useEffect(() => {
    const prepare = async (): Promise<void> => {
      await SplashScreen.preventAutoHideAsync()
    }

    prepare()
  }, [])

  if(!fontsLoaded){
    return undefined
  }else{
    SplashScreen.hideAsync()
  }
  let content;
  
  switch (style) {
    case 'xl':
      content = <Text style={styles.xl}>{children}</Text>;
      break;
    case 'l':
      content = <Text style={styles.l}>{children}</Text>;
      break;
    case 'm':
      content = <Text style={styles.m}>{children}</Text>;
      break;
    default:
      content = <Text style={styles.s}>{children}</Text>;
      break;
  }
  
  return (
    <View>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  s: {
    fontFamily: 'interRegular',
    fontSize: 20,
  },
  m: {
    marginTop: 50,
    fontFamily: 'interBlack',
    fontSize: 48,
  },
  l: {
    fontFamily: 'interExtraLight',
    fontSize: 64,
  },
  xl: {
    fontFamily: 'interExtraLight',
    fontSize: 120,
  },
});
export default MyText;