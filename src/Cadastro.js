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

        <Text style={Styles.enterUsing}>Ou Logar</Text>
        <View style={Styles.socialButtons}>
          <TouchableOpacity
            style={Styles.link}
            onPress={() => Alert.alert("MSG", "Clickou")}
          >
            <Image
              source={require("../assets/twitter-256-1.png")}
              style={Styles.mediaIcon}
            />
            <Text style={Styles.linkTxt}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.link, { backgroundColor: "#4267B2" }]}
            onPress={() => Alert.alert("MSG", "CLICKOU")}
          >
            <Image
              source={require("../assets/facebook-3-2560-1.png")}
              style={Styles.mediaIcon}
            />
            <Text style={Styles.linkTxt}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.cadastreSe}>
          <Text style={Styles.dontHaveAccount}> Não Tem uma Conta? </Text>
          <TouchableOpacity
            onPress={() => Alert.alert("MSG", "Vai pra tela de Cadastro")}
          >
            <Text style={{ color: "#F9C259", fontWeight: "bold" }}>
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}