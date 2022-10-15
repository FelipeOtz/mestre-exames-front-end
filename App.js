import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Styles from './styles/styles';
import Home from './src/home';
// import Login from "./src/login";
import Login from './src/Login';
import Welcome from "./src/Welcome";

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Login/>
      {/* <Welcome/> */}
    </SafeAreaView>
  );
}


