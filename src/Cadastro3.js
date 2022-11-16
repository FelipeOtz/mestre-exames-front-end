import React from "react";
import DatePicker from "react-native-date-picker";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
} from "react-native";

import Styles from "../styles/cadastro3";

export default function Cadastro3({ navigation }) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
    <View style={Styles.container}>
      <View style={Styles.image}>
        <Image
          source={require("../assets/508191.png")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View style={Styles.containerForm}>
        <View style={Styles.title}>
          <Text style={Styles.title}>Domicilio</Text>
        </View>
        <Text style={Styles.text}>Estado</Text>
        <TextInput style={Styles.input} />
        <Text style={Styles.text}>Cidade</Text>
        <TextInput style={Styles.input} />
        <Text style={Styles.text}>Bairro</Text>
        <TextInput style={Styles.input} />
        <Text style={Styles.text}>Nº de Residencia</Text>
        <TextInput style={Styles.input} />
        <Text style={Styles.text}>Cep</Text>
        <TextInput style={Styles.input} />
        <Text style={Styles.text}>Complemento</Text>
        <TextInput style={Styles.input} />

        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={Styles.buttonText}>Avançar</Text>
        </TouchableOpacity>  
      </View>
    </View>
  );
}