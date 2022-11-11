import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import Styles from "../styles/home";
import CardsAgendamento from "./components/CardsHomeAgendamento";

const Home = ({ navigation }) => (
  <View style={Styles.container}>
    <View style={Styles.panel}>
      <CardsAgendamento />
    </View>
  </View>
);
export default Home;
