import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Styles from './styles/styles';
import Welcome from "./src/Welcome";
import Login from "./src/Login";


export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Login/>
      {/* <Welcome/> */}
    </SafeAreaView>
  );
}


