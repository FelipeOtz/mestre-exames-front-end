import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Styles from './styles/styles';
import Home from './src/home';
import login from "./src/login";


export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <login/>
      
    </SafeAreaView>
  );
}


