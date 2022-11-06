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

export default function Cadastro({ navigation }) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
    <View style={Styles.container}>
      <View style={Styles.image}>
        <Image
          source={require("../assets/TaeAugust11 1.svg")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View style={Styles.containerForm}>
        <View style={Styles.title}>
          <Text style={Styles.title}>Cadastro</Text>
        </View>
        <Text style={Styles.text}>Nome</Text>
        <TextInput style={Styles.input} />
        <Text style={Styles.text}>Email</Text>
        <TextInput style={Styles.input} />
        <Text style={Styles.text}>Senha</Text>
        <TextInput
          style={Styles.input}
          autoComplete="password"
          secureTextEntry={true}
        />
        <Text style={Styles.text}>Senha</Text>
        <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            }}
            onCancel={() => {
            setOpen(false)
            }}
        />
        <Text style={Styles.text}>Celular</Text>
        <TextInput style={Styles.input} />

        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={Styles.buttonText}>Avançar</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "#F9C259", fontWeight: "bold", alignSelf: "center", paddingTop: 10 }}>
             Ou logar
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}