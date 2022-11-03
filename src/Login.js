import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Styles from "../styles/Login";

export default function Login() {
  return (
    <View style={Styles.container}>
        <View style={Styles.image}>
          <Image
            source={require('../assets/logo-01-azul.png')}
            style={{width: 100, height: 100}}
            resizeMode="contain"
          />
        </View>
        <View style={Styles.containerForm}>
          <Text style={Styles.title}>Login</Text>
          <Text style={Styles.text}>Email</Text>
          <TextInput
          style={Styles.input}
          />
        
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>entrar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
