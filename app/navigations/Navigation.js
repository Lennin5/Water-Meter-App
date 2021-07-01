import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExploreStack from "./ExploreStack";
import CalendarStack from "./CalendarStack";
import HomeStack from "./HomeStack";
import SensorsStack from "./SensorsStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {

  const [darkMode, setDarkMode] = useState(false);

  const LightTheme = {
      colors: {
        ...DefaultTheme.colors,
        theme: "light",
        //============================================================================ 
  
        primary: "#47cab4", //Color primario de la app en modo normal de la app
        secondary: "#f2f2f2", //Color secundario de la app en modo normal de la app
  
        background: "#f2f2f2", //Color del background central de la app
        text: "#000000", //Color del texto de la barra nativa de la app 
        textSecondary: "#464646", //Color del texto de la barra nativa de la app 
        card: "#ffffff", //Color del background de la parte inferior y superior de la app
        borderBottomColor: "transparent", // Color de BorderBottom del header
        border: "#B1B3B5", //BorderTop de la barra de navegación de la app
  
        //Otros colores del DarkTheme ================================================
  
        lightGrayColor: "#bdbdbd73", // Color GRAY LIGHT de la app en modo normal (sirve en la separación de AccountOptions)
        iconLightGrayColor: "#e3e3e3", // Color secundario de icono, es un gris más oscuro
        icon: "#7a7a7a", // Color de iconos de la app
        input: "#9e9e9e", // Color de inputs de formularios de la app
        barBackgroundColor: "#ffffff", // Background de la barra de estado
        barStyle: "dark-content", // Estilo de la barra de estado
        redColor: "#d60000", // Color rojo de la app en modo normal      
        modalMapColor: "#f8f9fb" //Color del background del Modal Map en modo normal
      }
    };
  const DarkTheme = {
    colors: {
      ...DefaultTheme.colors,
      theme: "dark",
      //============================================================================       
  
      primary: '#37d8bd', //Color primario de la app en modo oscuro de la app
      secondary: "#111518",//Color secundario de la app en modo oscuro de la app
  
      background: "#111518", //Color del background central de la app
      text: "#ffffff", //Color del texto de la barra nativa de la app 
      textSecondary: "#B1B3B5", //Color del texto de la barra nativa de la app 
      card: "#000000", //Color del background del header y navigation de la app     
      borderBottomColor: "gray", // Color de BorderBottom del header
      border: "#B1B3B5", //BorderTop de la barra de navegación de la app       
  
      //Otros colores del DarkTheme ================================================
  
      lightGrayColor: "#4646469d", // Color GRAY LIGHT de la app en modo oscuro (sirve en la separación de AccountOptions)
      iconLightGrayColor: "#4646469d", // Color secundario de icono, es un gris más oscuro 
      icon: "#B1B3B5", // Color de iconos de la app
      input: "#adadad", // Color de inputs de formularios de la app
      barBackgroundColor: "#000000", // Background de la barra de estado
      barStyle: "light-content", // Estilo de la barra de estado
      redColor: "#b64040", // Color rojo de la app en modo oscuro      
      modalMapColor: "#0a0a0a" //Color del background del Modal Map en modo oscuro
    },
  };  
    return (
        <NavigationContainer theme={darkMode ? DarkTheme : LightTheme}>
          <StatusBar
            // backgroundColor={darkMode ? "#000000" : "#ffffff"}
            // barStyle={darkMode ? "dark-content" : "dark-content"} 
            style={darkMode ? "light" : "dark"}
          />          
            <Tab.Navigator
                initialRouteName="account"
                tabBarOptions={{
                  inactiveTintColor: darkMode ? "#B1B3B5" : "#9F9F9F",
                  activeTintColor: darkMode ? "#37d8bd" : "#47cab4",
                }}                
                screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
                })}
            >
            <Tab.Screen
            name="explore"
            component={ExploreStack}
            options={{ title: "Explore" }}
            />
            <Tab.Screen
            name="calendar"
            component={CalendarStack}
            options={{ title: "Calendar" }}
            />
            <Tab.Screen
            name="home"
            component={HomeStack}
            options={{ title: "Home" }}
            />
            <Tab.Screen
            name="sensors"
            component={SensorsStack}
            options={{ title: "Sensors" }}
            />
            <Tab.Screen
            name="account"
            component={AccountStack}
            options={{ title: "Account" }}
            />                
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color) {
    let iconName;
  
    switch (route.name) {
      case "explore":
        iconName = "compass-outline";
        break;
      case "calendar":
        iconName = "calendar";
        break;
      case "home":
        iconName = "home";
        break;
      case "sensors":
        iconName = "water-pump";
        break;
      case "account":
        iconName = "account";
        break;
      default:
        break;
    }
    return (
      <Icon type="material-community" name={iconName} size={25} color={color} />
    );
  }