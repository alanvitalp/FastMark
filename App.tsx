import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components'
import Routes from './src/routes';
import theme from './src/styles/theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
  );
}


export default App;