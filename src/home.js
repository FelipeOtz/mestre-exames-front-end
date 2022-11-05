import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import Styles from "../styles/home";

const Home = ({ navigation }) => (
  <View style={Styles.container}>
    <View style={Styles.panel}>
      <View style={Styles.card}>
        <View style={Styles.cardTop}></View>
      </View>
      <View style={Styles.card}>
        <View style={Styles.cardTop}></View>
      </View>
      <View style={Styles.card}>
        <View style={Styles.cardTop}></View>
      </View>
    </View>
  </View>
);
export default Home;
