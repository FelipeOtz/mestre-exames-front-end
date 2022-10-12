import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Styles from './styles/styles';
import Home from './src/home'


export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Hello World </Text>
     
    </SafeAreaView>
  );
}


