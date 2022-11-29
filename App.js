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
import Cadastro2 from "./src/Cadastro2";
import Cadastro3 from "./src/Cadastro3";
import Agendar from "./src/Agendar";
import Agendar2 from "./src/components/Agendar2";
import Agendar3 from "./src/components/Agendar3";
import Agendar4 from "./src/components/Agendar4";
import Agendar5 from "./src/components/Agendar5";
import Usuario from "./src/Usuario";

import Chat from './src/Chat';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={cadastro} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} />
        <Stack.Screen name="Cadastro3" component={Cadastro3} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Agendar" component={Agendar} />
        <Stack.Screen name="Agendar2" component={Agendar2} />
        <Stack.Screen name="Agendar3" component={Agendar3} />
        <Stack.Screen name="Agendar4" component={Agendar4} />
        <Stack.Screen name="Agendar5" component={Agendar5} /> */}
        <Stack.Screen name="Usuario" component={Usuario} />

      </Stack.Navigator>
    </NavigationContainer>
    // <Chat/>
  );
}
