import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import Navigation from './app/navigations/Navigation';
import firebaseApp from "./app/utils/firebase";
import { encode, decode } from "base-64";

LogBox.ignoreLogs(["It appears that you are using old version of react-navigation library", "Setting a timer"]);

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

export default function App() {
  return (
    <>      
      <Navigation />
    </>
  );
}
