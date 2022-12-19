import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/HomeScreen";
import TestingScreen from "../components/TestingScreen";
import PokemonScreen from "../components/PokemonScreen";

// import { Container } from './styles';
const HomeStack = createNativeStackNavigator();

const HomeRoutes: React.FC = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      initialRouteName="HomeArea"
    >
      <HomeStack.Screen name="HomeArea" component={HomeScreen} />
      <HomeStack.Screen name="PokemonScreen" component={PokemonScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
