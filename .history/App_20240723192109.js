import 'react-native-url-polyfill/auto'

import React, { useState, useEffect } from "react"

import { View, Text } from 'react-native'

import { Session } from '@supa'

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor="#871cfe"
        barStyle="light-content"
      />
      <Routes />
    </NavigationContainer>
  );
}
