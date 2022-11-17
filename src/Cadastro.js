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

export default function Cadastro({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(Platform.OS === "ios" ? true : false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);

    setShow(Platform.OS === "android" ? false : show);
    console.log(event.type);
  };

const MENSAGEM_NOME = 'Digite a seu nome';
const MENSAGEM_EMAIL = 'Digite o seu email';
const MENSAGEM_SENHA = 'Digite sua senha';
const MENSAGEM_CELULAR = 'Digite o seu celular';

const Tela1 = ({ navigation}) => {
  const [userNome, setUserNome] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSenha, setUserSenha] = useState('');
  const [usertCelular, setUserCelular] = useState('');
}

let usuario = {
  nome: userNome,
  email: userEmail,
  senha: userSenha,
  celular: usertCelular,
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
          placeholder={MENSAGEM_NOME}
          defaultValue={''}/>
          <Text style={Styles.text}>Email</Text>
          <TextInput style={Styles.input} />
          <Text style={Styles.text}>Senha</Text>
          <TextInput
            style={Styles.input}
            autoComplete="password"
            secureTextEntry={true}
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
          <TextInput style={Styles.input} />

          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate("Cadastro2")}
          >
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
