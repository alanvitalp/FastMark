import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Home from '../src/screens/HomeScreen'

const Routes = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default Routes;