import "react-native-gesture-handler";
import React from "react";

import Home from './screens/HomeScreen'
import Search from './screens/SearchScreen'
import Shopping from './screens/ShoppingScreen'
import User from "./screens/UserScreen";
import Market from "./screens/MarketScreen";
import Login from "./screens/LoginScreen";
import SignUp from "./screens/SignUpScreen";
import AddProduct from "./screens/AddProductScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthProvider } from "../src/contexts/AuthProvider";


import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import MarketScreen from "./screens/MarketScreen";
import { useGoogle } from "./contexts/AuthGoogle";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const AuthStack = createStackNavigator()
const AppStack = createStackNavigator()

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="signUp"
        component={SignUp}
        options={{ title: "Criar Usuário" }}
      />
    </AuthStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false}}
      />
      <AppStack.Screen
        name="user"
        component={User}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="search"
        component={Search}
        options={{ headerShown: false }}
      />
        <AppStack.Screen
        name="Market"
        component={Market}
        options={{ headerShown: false }}
      />  
      <AppStack.Screen
        name="shopping"
        component={Shopping}
        options={{ headerShown: false }}
      />  
    </AppStack.Navigator>
  );
};

const MarketTabBottomNavigation = () => {
  <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, tintColor }: any) => {
             if (route.name === "user") {
              return (
                <FontAwesome
                  name="user-o" 
                  size={28} 
                  color={focused ? tintColor : '#C5C5C5'}
                  focused={focused}
                />
              )
            } else if (route.name === "AddProduct") {
              <AntDesign 
              name="plussquare" 
              size={28} 
              focused={focused} 
              color={focused ? tintColor : '#C5C5C5'} 
              />
            }
          },
        })}       
        tabBarOptions={{
          showLabel: false,
          style: {
            height: 80,
          },
        }}
      >
        <Tab.Screen name="AddProduct" component={AddProduct}/>
        <Tab.Screen name="user" component={User} />
      </Tab.Navigator>
}

const TabBottomNavigation = () => {
  return (
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, tintColor }: any) => {
            if (route.name === 'home') {
              return (
                <AntDesign
                  name="home"
                  size={28} 
                  color={focused ? tintColor : '#C5C5C5'}
                  focused={focused}
                />
              );
            } else if (route.name === 'search') {
              return (
                <AntDesign
                  name="search1"
                  size={28} 
                  color={focused ? tintColor : '#C5C5C5'}
                  focused={focused}
                />
              );
            } else if (route.name === "shopping") {
              return (
                <Feather
                  name="shopping-bag" 
                  size={28} 
                  color={focused ? tintColor : '#C5C5C5'}
                  focused={focused}
                />
              )
            } else if (route.name === "user") {
              return (
                <FontAwesome
                  name="user-o" 
                  size={28} 
                  color={focused ? tintColor : '#C5C5C5'}
                  focused={focused}
                />
              )
            }
          },
        })}       
        tabBarOptions={{
          showLabel: false,
          style: {
            height: 80,
          },
        }}
      >
        <Tab.Screen name="home" component={HomeStackScreen}/>
        <Tab.Screen name="search" component={Search} />
        <Tab.Screen name="shopping" component={Shopping} />
        <Tab.Screen name="user" component={User} />
      </Tab.Navigator>
  )
}


const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Market" component={MarketScreen} />
    </HomeStack.Navigator>
  );
}

const Routes = () => {
  const { user } = useGoogle();
  const { updateAuthenticatedUser, authenticatedUser } = useAuthProvider();

  React.useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem(
          "@markefast/logged"
        );
        const loggedAccount = data ? JSON.parse(data) : null;

        if (loggedAccount === null) return;
        updateAuthenticatedUser(loggedAccount);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      {/* {(user || authenticatedUser) ? 
      <AppNavigation/> 
      : <AuthNavigation/>} */}
      <TabBottomNavigation/>
    </NavigationContainer>
  );
};

export default Routes;