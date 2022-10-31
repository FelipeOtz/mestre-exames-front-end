import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Styles from "../styles/Login";

export default function Login() {
  return (
    <View style={Styles.container}>
      <Image
        source={require("../assets/logo-01-branco.png")}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />

      <View style={Styles.containerForm}>
        <Text style={Styles.title}>Cuide de sua saúde fazendo exames</Text>
        <Text style={Styles.text}>Faça o login para começar</Text>

        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
