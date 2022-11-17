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

import Styles from "../styles/cadastro";

export default function Cadastro2({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <View style={Styles.container}>
      <View style={Styles.image}>
        <Image
          source={require("../assets/21_02_Data-security_81.png")}
          style={{ width: 250, height: 150 }}
          resizeMode="contain"
        />
      </View>

      <View style={Styles.containerForm}>
        <View style={Styles.fundo}>
          <Text style={Styles.text}>Celular de Recado</Text>
          <TextInput style={Styles.input} />
          <Text style={Styles.text}>CPF</Text>
          <TextInput style={Styles.input} />
          <Text style={Styles.text}>Convênio</Text>
          <TextInput style={Styles.input} />
          <Text style={Styles.text}>Sexo</Text>
          <TextInput style={Styles.input} />
          <Text style={Styles.text}>Algum problema de saude</Text>
          <TextInput style={Styles.input} />

          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate("Cadastro3")}
          >
            <Text style={Styles.buttonText}>Avançar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}