import { useFonts as useExpoFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

export default function useFonts() {
  const [loaded, error] = useExpoFonts({
    SatoshiBlack: require('../assets/fonts/Satoshi-Black.otf'),
    SatoshiBold: require('../assets/fonts/Satoshi-Bold.otf'),
    SatoshiLight: require('../assets/fonts/Satoshi-Light.otf'),
    SatoshiMedium: require('../assets/fonts/Satoshi-Medium.otf'),
    SatoshiRegular: require('../assets/fonts/Satoshi-Regular.otf'),
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  });

  return [loaded, error];
}
