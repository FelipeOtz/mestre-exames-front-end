import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Agendamentos from "./Agendamentos";
import Agendar from "./Agendar";

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Agendamentos" component={Agendamentos} />
      <Tab.Screen name="Agendar" component={Agendar}/>
    </Tab.Navigator>
  );
}
