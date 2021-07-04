import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './navigation/Navigator';
import { ThemeProvider } from './theme/theme-context';


export default function App() {
    const [fontLoaded, error] = useFonts({
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
      'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
      'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    });
    if (!fontLoaded) return <AppLoading />;
  return (
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
  );
}
