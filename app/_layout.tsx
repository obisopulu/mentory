import "expo-dev-client";
import "react-native-reanimated";

import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'interBlack': require('@/assets/font/interBlack.ttf'),
    'interBold': require('@/assets/font/interBold.ttf'),
    'interExtraBold': require('@/assets/font/interExtraBold.ttf'),
    'interExtraLight': require('@/assets/font/interExtraLight.ttf'),
    'interThin': require('@/assets/font/interThin.ttf'),
    'interSemiBold': require('@/assets/font/interSemiBold.ttf'),
    'interRegular': require('@/assets/font/interRegular.ttf'),
    'interMedium': require('@/assets/font/interMedium.ttf'),
    'interLight': require('@/assets/font/interLight.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar style="dark" />
    </>
  );
}