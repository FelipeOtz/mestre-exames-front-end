import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Styles from "../styles/Login";

export default function Login() {
    return(
      <View style={Styles.container}>
        <View>
          <Image
            source={require('../assets/logo-01-azul.png')}
            style={{width: '100%'}}
            resizeMode="container"
            />
        </View>

        <View style={Styles.containerForm}>
          <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
          <Text style={styles.text}>Faça o login para começar</Text>
        
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>


      </View>
    )
  };

  const styles = StyleSheet.create({
    Container:{
      flex:1,
      backgroundColor: '#3779f4'
    }
  })