import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native'
import theme from './src/styles/theme';
import Routes, { HomeNav } from './src/routes';



import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Text } from 'react-native';
import { AuthContextProvider } from './src/contexts/AuthGoogle';
import AuthProvider from './src/contexts/AuthProvider';


const App = () => {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });


  if (!fontsLoaded) {
    return <Text>Fonts não carregadas.</Text>
  } else {
    return (
      <AuthContextProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      </AuthContextProvider>

    );
  }

}


export default App;