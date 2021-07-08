import React from 'react';
import { ThemeProvider } from 'styled-components/native'
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