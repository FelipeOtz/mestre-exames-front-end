import React from "react";
import { View, Text, Button, Image } from "react-native";
import Styles from "../styles/Welcome";

import CarouselCards from "./components/CarouselCards";

const Welcome = ({ navigation }) => (
  <View style={Styles.homeContainer}>
    <Image
      source={require("../assets/logo-01-branco.png")}
      style={Styles.logo}
    />
    <CarouselCards />
    <Text style={Styles.primaryText}>Carrossel carr oss seel Carr.</Text>
    <View>
      <Button
        color="#f9c259"
        title="Começar"
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={Styles.secondaryText}>Carrossel carr oss seel Carr.</Text>
    </View>
  </View>
);

export default Welcome;
