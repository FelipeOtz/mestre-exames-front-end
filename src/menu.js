import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Agendamentos from "./Agendamentos";
import Agendar from "./Agendar";
import Chat from "./Chat";
import Conta from "./Usuario";

const Tab = createBottomTabNavigator();

export default function Menu({ route }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen initialParams={route.params} name="Home" component={Home} />
      <Tab.Screen name="Agendamentos" component={Agendamentos} />
      <Tab.Screen name="Agendar" component={Agendar} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Conta" component={Conta} />
    </Tab.Navigator>
  );
}
