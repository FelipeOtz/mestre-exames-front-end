import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import Styles from "../styles/Login";

import Toast from "react-native-toast-message";

import { useState } from "react";

export default function Login({ navigation }) {
  const [isWrong, setIsWrong] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={Styles.container}>
      <View style={Styles.image}>
        <Image
          source={require("../assets/logo-01-azul.png")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>
      <View style={Styles.containerForm}>
        <View style={Styles.title}>
          <Text style={Styles.title}>Login</Text>
        </View>
        <Text style={Styles.text}>Email</Text>
        <TextInput style={Styles.input} onChangeText={setEmail} />
        <Text style={Styles.text}>Senha</Text>
        <TextInput
          style={Styles.input}
          autoComplete="password"
          secureTextEntry={true}
          onChangeText={setSenha}
        />

        {isWrong && <Text style={Styles.wrong}>Email ou senha incorretos</Text>}

        <Text style={Styles.forgot}>Esqueci minha senha</Text>

        <TouchableOpacity
          style={Styles.button}
          onPress={() => {
            handleLogin(email, senha, setIsWrong, isWrong, navigation);
          }}
        >
          <Text style={Styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={Styles.enterUsing}>Ou entrar usando</Text>
        <View style={Styles.socialButtons}>
          <TouchableOpacity
            style={Styles.link}
            onPress={() => Alert.alert("", "Clickou")}
          >
            <Image
              source={require("../assets/twitter-256-1.png")}
              style={Styles.mediaIcon}
            />
            <Text style={Styles.linkTxt}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.link, { backgroundColor: "#4267B2" }]}
            onPress={() => Alert.alert("", "Click")}
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
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={{ color: "#F9C259", fontWeight: "bold" }}>
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const handleLogin = async (
  emailDigitado,
  senhaDigitada,
  setIsWrong,
  isWrong,
  navigation
) => {
  const options = { method: "GET" };

  const response = await fetch(
    "http://54.94.200.75:8080/paciente/find",
    options
  );
  const jsonData = await response.json();

  const usuario = jsonData.find(({ email }) => email === emailDigitado);

  let senha;

  if (usuario) {
    senha = usuario.senha;
  } else {
    setIsWrong(true);
    return;
  }

  if (senhaDigitada === senha) {
    setIsWrong(false);
  } else {
    setIsWrong(true);
    return;
  }

  navigation.navigate("Menu");
};
