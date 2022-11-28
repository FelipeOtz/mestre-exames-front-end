import React from "react";
import { View, Text, Button, Image } from "react-native";
import Styles from "../styles/Welcome";



const Welcome = ({ navigation }) => (
  <View style={Styles.homeContainer}>
    <Image
      source={require("../assets/logo-01-branco.png")}
      style={Styles.logo}
    />
    <Image
      source={require("../assets/welcomeImg.png")}
      style={{width: 330, height: 380}}
    />
    <Text style={Styles.primaryText}>Exames médicos sem complicação</Text>
  <View>
      <Button
        color="#f9c259"
        title="Começar"
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={Styles.secondaryText}>Faça login ou crie sua conta</Text>
    </View>
  </View>
);

export default Welcome;
