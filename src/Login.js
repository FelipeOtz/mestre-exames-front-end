import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Styles from "../styles/Login";

export default function Login() {
  return (
    <View style={Styles.container}>
      <View style={Styles.image}>
        <Image
          source={require('../assets/logo-01-azul.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View style={Styles.containerForm}>
        <View style={Styles.title}>
          <Text style={Styles.title}>Login</Text>
        </View>
        <Text style={Styles.text}>Email</Text>
        <TextInput
          style={Styles.input}
        />
        <Text style={Styles.text}>Senha</Text>
        <TextInput
          style={Styles.input}
          autoComplete='password'
          secureTextEntry={true}
        />
        <Text style={Styles.forgot}>Esqueci minha senha</Text>

        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={Styles.link}>Ou entrar usando</Text>
        <View style={Styles.links}>
          <TouchableOpacity style={Styles.buttonTwitter}>
            <Text style={Styles.buttonTexti}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonFacebook}>
            <Image source={require('../assets/facebook-3-256 1.svg')}
          style={{ width: 100, height: 20 }}
          resizeMode="contain"/>
            <Text style={Styles.buttonTexti}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
