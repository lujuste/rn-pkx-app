import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeIcon from "../../assets/home.svg";
import HomeActive from "../../assets/home-active.svg";

import TypesIcon from "../../assets/types.svg";
import TypesIconActive from "../../assets/types-active.svg";

import HomeScreen from "../../modules/home/components/HomeScreen";
import HomeRoutes from "../../modules/home/routes/home.routes";

const RouteApp: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#02BE91",
        tabBarInactiveTintColor: "gray",
        tabBarIconStyle: {
          marginBottom: -14,
        },
        tabBarLabelStyle: {
          marginBottom: 8,
          fontSize: 19,
        },
        tabBarStyle: {
          //height: Platform.OS==="ios" ? 80 : 60,
          justifyContent: "center",
          alignItems: "center",
          height: 78,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <HomeActive width={27} height={27} fill={color} />
            ) : (
              <HomeIcon width={27} height={27} fill={color} />
            ),
        }}
      />

      <Tab.Screen
        name="Types"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <TypesIconActive width={21} height={21} fill={color} />
            ) : (
              <TypesIcon width={21} height={21} fill={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RouteApp;
