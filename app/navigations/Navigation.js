import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LightTheme from '../themes/LightTheme';
import DarkTheme from '../themes/DarkTheme';

import { firebaseApp } from "../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

import ExploreStack from "./ExploreStack";
import CalendarStack from "./CalendarStack";
import HomeStack from "./HomeStack";
import SensorsStack from "./SensorsStack";
import AccountStack from "./AccountStack";

import UserExist from '../components/UserExist';
import IntroApp from '../components/IntroApp';
const Tab = createBottomTabNavigator();

export default function Navigation() {
  
  const existUser = UserExist();  
  console.log("Navigation.js - Exist User?: "+existUser);

  // Efecto que trae el dark mode true/false del usuario actual y se le aplica al State que,
  // a su vez se lo aplica a todo el sistema de la app
  const [darkMode, setDarkMode] = useState(null);
  const [dataLoadedState, setDataLoadedState] = useState(null);
  useEffect(() => {
    (async () => {
      await firebase.auth().onAuthStateChanged(async function (user) {
        if (user) {
          await db.collection(user.uid).doc('Configuration_Data')
            .onSnapshot(function (doc) {
              if (doc.exists) {
                var user = doc.data();
                setDarkMode(user.Dark_Mode);
								setTimeout(() => {
									setDataLoadedState(user.Loaded_Data);
								}, 1);                
              } else {
                setDarkMode(false);
              }
            });
        } else {
          setDarkMode(false);          
        }
      });
    })();
  }, []);
  
    return (
      <>
      <IntroApp />    
        <NavigationContainer theme={darkMode ? DarkTheme : LightTheme}>
            <Tab.Navigator
                initialRouteName={"account"}
                tabBarOptions={{
                  inactiveTintColor: darkMode ? "#B1B3B5" : "#9F9F9F",
                  activeTintColor: darkMode ? "#37d8bd" : "#47cab4",    
                }}                
                screenOptions={                
                ({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),                
                tabBarVisible: existUser,
                })}
            >
            <Tab.Screen
            name="explore"
            component={ExploreStack}
            options={{ title: "Explore"}}
            
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
            options={{ title: "Account",  }}
            />                
            </Tab.Navigator>
        </NavigationContainer>
      </>
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