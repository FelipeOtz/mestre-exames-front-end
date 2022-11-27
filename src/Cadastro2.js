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

import Styles from "../styles/cadastro2";

const MENSAGEM_CELULARRECADO = 'Digite o seu Celular de Recado';
const MENSAGEM_CPF = 'Digite o seu cpf';
const MENSAGEM_CONVENIO = 'Digite seu convenio';
const MENSAGEM_SEXO = 'Digite o seu sexo';
const MENSAGEM_OBSERVACAO = 'Digite a observacao de problemas';

export default function Cadastro2({ navigation, route }) {
   let usuario = route.params;
  
  const [usrCelularRecado, setUsrCelularRecado] = useState('');
  const [usrCpf, setUsrCpf] = useState('');
  const [usrConvenio, setUsrConvenio] = useState('');
  const [usrSexo, setUsrSexo] = useState('');
  const [usrObservacao, setUsrObservacao] = useState('');

  usuario.celularrecado=usrCelularRecado;
  usuario.cpf=usrCpf;
  usuario.convenio=usrConvenio;
  usuario.sexo=usrSexo;
  usuario.observacao=usrObservacao;

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
          <Text style={Styles.textCima}>Celular de Recado</Text>
          <TextInput style={Styles.input}
          onChangeText={(value) => setUsrCelularRecado(value)} />
          <Text style={Styles.text}>CPF</Text>
          <TextInput style={Styles.input}
          onChangeText={(value) => setUsrCpf(value)} />
          <Text style={Styles.text}>Convênio</Text>
          <TextInput style={Styles.input} 
          onChangeText={(value) => setUsrConvenio(value)}/>
          <Text style={Styles.text}>Sexo</Text>
          <TextInput style={Styles.input}
          onChangeText={(value) => setUsrSexo(value)} />
          <Text style={Styles.text}>Algum problema de saude</Text>
          <TextInput style={Styles.input} 
          onChangeText={(value) => setUsrObservacao(value)}/>

          <TouchableOpacity
            style={Styles.button2}
            onPress={() =>
              ValidateCadastro(
                usrCelularRecado,
                usrCpf,
                usrConvenio,
                usrSexo,
                usrObservacao
              ) && navigation.navigate('Cadastro3', usuario)}>
            <Text style={Styles.buttonText}>Avançar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
const ValidateCadastro = (CELULARRECADO, CPF, CONVENIO, SEXO, OBSERVACAO) => {
  if (CELULARRECADO.trim().length === 0) {
    alert(MENSAGEM_CELULARRECADO);
    return false;
  }
  if (CPF.trim().length === 0) {
    alert(MENSAGEM_CPF);
    return false;
  }
  if (CONVENIO.trim().length === 0) {
    alert(MENSAGEM_CONVENIO);
    return false;
  }
  if (SEXO.trim().length === 0) {
    alert(MENSAGEM_SEXO);
    return false;
  }
  if (OBSERVACAO.trim().length === 0) {
    alert(MENSAGEM_OBSERVACAO);
    return false;
  }
  return true;
};
