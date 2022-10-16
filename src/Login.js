import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Styles from "../styles/Login";

export default function Login() {
    return(
      <View style={Styles.container}>
        
          <Image
            source={require('../assets/logo-01-branco.png')}
            style={{width: 100, height: 100}}
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
    )
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#3779f4'
  },
  containerLogo:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  CcontainerForm:{
    flex:1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text:{
    color: '#alalal'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#34b5f4',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
})