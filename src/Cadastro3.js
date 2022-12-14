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

import Toast from "react-native-toast-message";

import Styles from "../styles/cadastro3";

const MENSAGEM_ESTADO = "Digite o seu estado";
const MENSAGEM_CIDADE = "Digite a sua cidade";
const MENSAGEM_BAIRRO = "Digite o seu bairro";
const MENSAGEM_RUA = "Digite a sua rua";
const MENSAGEM_NUMERO = "Digite o numero de sua residencia";
const MENSAGEM_CEP = "Digite o seu cep";
const MENSAGEM_COMPLEMENTO = "Digite o seu complemento";

export default function Cadastro3({ navigation, route }) {
  let usuario = route.params;

  const [usrEstado, setUsrEstado] = useState("");
  const [usrCidade, setUsrCidade] = useState("");
  const [usrBairro, setUsrBairro] = useState("");
  const [usrRua, setUsrRua] = useState("");
  const [usrNumero, setUsrNumero] = useState("");
  const [usrCep, setUsrCep] = useState("");
  const [usrComplemento, setUsrComplemento] = useState("");

  usuario.estado = usrEstado;
  usuario.cidade = usrCidade;
  usuario.bairro = usrBairro;
  usuario.rua = usrRua;
  usuario.numero = usrNumero;
  usuario.cep = usrCep;
  usuario.complemento = usrComplemento;

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
        <View style={Styles.fundo}>
          <View style={Styles.title}>
            <Text style={Styles.title}>Domicilio</Text>
          </View>
          <Text style={Styles.text}>Estado</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(value) => setUsrEstado(value)}
          />
          <Text style={Styles.text}>Cidade</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(value) => setUsrCidade(value)}
          />
          <Text style={Styles.text}>Bairro</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(value) => setUsrBairro(value)}
          />
          <Text style={Styles.text}>Rua</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(value) => setUsrRua(value)}
          />
          <Text style={Styles.text}>N?? de Residencia</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(value) => setUsrNumero(value)}
          />
          <Text style={Styles.text}>Cep</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(value) => setUsrCep(value)}
          />
          <Text style={Styles.text}>Complemento</Text>
          <TextInput
            style={Styles.input}
            onChangeText={(value) => setUsrComplemento(value)}
          />

          <TouchableOpacity
            style={Styles.button}
            onPress={() =>
              ValidateCadastro(
                usrEstado,
                usrCidade,
                usrBairro,
                usrRua,
                usrNumero,
                usrCep,
                usrComplemento
              ) && handleCadastro(usuario, navigation)
            }
          >
            <Text style={Styles.buttonText}>Avan??ar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const ValidateCadastro = (
  ESTADO,
  CIDADE,
  BAIRRO,
  RUA,
  NUMERO,
  CEP,
  COMPLEMENTO
) => {
  if (ESTADO.trim().length === 0) {
    alert(MENSAGEM_ESTADO);
    return false;
  }
  if (CIDADE.trim().length === 0) {
    alert(MENSAGEM_CIDADE);
    return false;
  }
  if (BAIRRO.trim().length === 0) {
    alert(MENSAGEM_BAIRRO);
    return false;
  }
  if (RUA.trim().length === 0) {
    alert(MENSAGEM_RUA);
    return false;
  }
  if (NUMERO.trim().length === 0) {
    alert(MENSAGEM_NUMERO);
    return false;
  }
  if (CEP.trim().length === 0) {
    alert(MENSAGEM_CEP);
    return false;
  }
  if (COMPLEMENTO.trim().length === 0) {
    alert(MENSAGEM_COMPLEMENTO);
    return false;
  }
  return true;
};

const handleCadastro = (usuario, navigation) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  };

  fetch("http://54.94.200.75:8080/paciente/save", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      alert("Voc?? se cadastrou com sucesso");
      navigation.navigate("Login");
    })
    .catch((err) => {
      console.error(err);
      alert("Erro ao se cadastrar");
    });
};
