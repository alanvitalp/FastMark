import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native'
import Routes from './src/routes';
import theme from './src/styles/theme';

import * as Font from 'expo-font'

const App = () => {
  
  useEffect(() => {
    loadFonts();
  }, [])

  const loadFonts = async () => {
    await Font.loadAsync({
      "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
      "Poppins-Medium": require('./assets/fonts/Poppins-Medium.ttf'),
      "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf')
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}


export default App;