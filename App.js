import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import Welcome from "./src/Welcome";
import Login from "./src/Login";
import Agendamentos from "./src/Agendamentos";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/home";
import Menu from "./src/menu";
import cadastro from "./src/Cadastro";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={cadastro} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
