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
import DateTimePicker from "@react-native-community/datetimepicker";

import Styles from "../styles/cadastro";


const MENSAGEM_NOME = 'Digite o seu nome';
const MENSAGEM_EMAIL = 'Digite o seu email';
const MENSAGEM_SENHA = 'Digite a sua senha';
const MENSAGEM_CELULAR = 'Digite o seu celular';


export default function Cadastro({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(Platform.OS === "ios" ? true : false);


const [usrNome, setUsrNome] = useState('');
const [usrEmail, setUsrEmail] = useState('');
const [usrSenha, setUsrSenha] = useState('');
const [usrCelular, setUsrCelular] = useState('');

  let usuario = {
    nome: usrNome,
    cpf: "",
    data_nasc: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
    sexo: "",
    observacao: "",
    celular: usrCelular,
    email: usrEmail,
    celularrecado: "",
    numero: "",
    rua: "",
    cep: "",
    cidade: "",
    estado: "",
    bairro: "",
    complemento: "",
    senha: usrSenha,
    convenio: ""
  };


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);

    setShow(Platform.OS === "android" ? false : show);
    console.log(event.type);
  };



  return (
    <View style={Styles.container}>
      <View style={Styles.image}>
        <Image
          source={require("../assets/TaeAugust111.png")}
          style={{ width: 300, height: 150 }}
          resizeMode="contain"
        />
      </View>

      <View style={Styles.containerForm}>
        <View style={Styles.fundo}>
          <View style={Styles.title}>
            <Text style={Styles.title}>Cadastro</Text>
          </View>
          <Text style={Styles.text}>Nome</Text>
          <TextInput style={Styles.input} 
          defaultValue={''}
          onChangeText={(value) => setUsrNome(value)}/>
          <Text style={Styles.text}>Email</Text>
          <TextInput style={Styles.input}
          onChangeText={(value) => setUsrEmail(value)} />
          <Text style={Styles.text}>Senha</Text>
          <TextInput
            style={Styles.input}
            autoComplete="password"
            secureTextEntry={true}
            onChangeText={(value) => setUsrSenha(value)}
          />
          <Text style={Styles.text}>Data de Nascimento</Text>

          <View>
            {Platform.OS === "android" && (
              <>
                <TouchableOpacity
                  style={Styles.button}
                  onPress={() => setShow(true)}
                >
                  <Text style={Styles.buttonText}>
                    {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                  </Text>
                </TouchableOpacity>
              </>
            )}

            {show && (
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  width: 70,
                  justifyContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                  paddingRight: 90,
                  borderRadius: 30,
                }}
              >
                <DateTimePicker
                  style={{
                    width: 200,
                  }}
                  testID="dateTimePicker"
                  value={date}
                  mode={"date"}
                  is24Hour={true}
                  onChange={onChange}
                />
              </View>
            )}
          </View>

          <Text style={Styles.text}>Celular</Text>
          <TextInput style={Styles.input}
          onChangeText={(value) => setUsrCelular(value)} />

          <TouchableOpacity
            style={Styles.button}
            onPress={() =>
              ValidateCadastro(
                usrNome,
                usrEmail,
                usrSenha,
                usrCelular,
              ) && navigation.navigate('Cadastro2', usuario)}>
            <Text style={Styles.buttonText}>Avançar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#F9C259",
                fontWeight: "bold",
                alignSelf: "center",
                paddingTop: 10,
              }}
            >
              Ou logar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const ValidateCadastro = (NOME, EMAIL, SENHA, CELULAR) => {
  if (NOME.trim().length === 0) {
    alert(MENSAGEM_NOME);
    return false;
  }

  if (EMAIL.trim().length === 0) {
    alert(MENSAGEM_EMAIL);
    return false;
  }
  if (SENHA.trim().length === 0) {
    alert(MENSAGEM_SENHA);
    return false;
  }
  if (CELULAR.trim().length === 0) {
    alert(MENSAGEM_CELULAR);
    return false;
  }
  return true;
};