import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/modules/home/components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RouteApp from "./src/routes/RouteApp";
import { MenuProvider } from "react-native-popup-menu";
import { MainProvider } from "./src/modules/home/hooks/main";

export default function App() {
  return (
    <NavigationContainer>
      <MenuProvider>
        <MainProvider>
          <RouteApp />
        </MainProvider>
      </MenuProvider>
    </NavigationContainer>
  );
}
