import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';
import { ThemeProvider } from './theme/theme-context';
import { Provider } from 'react-redux';
import store from './store';


export default function App() {
    const [fontLoaded, error] = useFonts({
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
      'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
      'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    });
    if (!fontLoaded) return <AppLoading />;
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </Provider>
  );
}
