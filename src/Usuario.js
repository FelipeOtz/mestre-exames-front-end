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
  ScrollView,
} from "react-native";

import Styles from "../styles/Usuario";

export default function Usuario({ navigation }) {
  const [usrNome, setUsrNome] = useState("");
  const [usrEmail, setUsrEmail] = useState("");
  const [usrSenha, setUsrSenha] = useState("");
  return (
    <View style={Styles.container}>
      <View style={{ width: "100%", paddingHorizontal: 10, height: "85%" }}>
        <View style={Styles.dentro}>
          <View style={Styles.bordinha}>
            <Image
              source={require("../assets/account.png")}
              style={Styles.icons}
            />
            <Text style={Styles.text}>Nome</Text>
            <TextInput
              style={Styles.input}
              onChangeText={(value) => setUsrNome(value)}
            />
            <Text style={Styles.text}>Email</Text>
            <TextInput
              style={Styles.input}
              onChangeText={(value) => setUsrNome(value)}
            />
            <Text style={Styles.text}>Celular</Text>
            <TextInput
              style={Styles.input}
              onChangeText={(value) => setUsrNome(value)}
            />

            <TouchableOpacity
              style={Styles.button2}
              onPress={() => {
                Alert.alert("Edição salva com sucesso!");
              }}
            >
              <Text style={Styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
