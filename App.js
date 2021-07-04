import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import Navigation from './app/navigations/Navigation';
import firebaseApp from "./app/utils/firebase";

LogBox.ignoreLogs(["It appears that you are using old version of react-navigation library"]);

export default function App() {
  return (
    <>      
      <Navigation />
    </>
  );
}
