// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme';

import Header from './src/components/Header/index'


import { useFonts } from 'expo-font';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Header />
      </View>
    </ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins',
  },
});


export default App;