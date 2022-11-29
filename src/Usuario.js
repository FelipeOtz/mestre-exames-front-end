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
  ScrollView
} from "react-native";

import Styles from "../styles/Usuario";

export default function Usuario({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          underlayColor="transparent"
        >
          <Image
            source={require("../assets/icons/return-arrow-1.png")}
            style={Styles.icon}
          />
        </TouchableOpacity>
        <Text style={Styles.title}>Perfil</Text>
        <View></View>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 10, height: "85%" }}>
        <View style={Styles.dentro}>
          <View style={Styles.bordinha}>
            <Image
              source={require("../assets/1000_F_126334093_IRINHGiBFVab4Kgw5jg6Av7qhBPqvSO4.jpg")}
              style={Styles.icons}
            />
            <Text style={Styles.text}>Nome</Text>
            <TextInput style={Styles.input}
              onChangeText={(value) => setUsrNome(value)} />
              <Text style={Styles.text}>Email</Text>
            <TextInput style={Styles.input}
              onChangeText={(value) => setUsrNome(value)} />
              <Text style={Styles.text}>Celular</Text>
            <TextInput style={Styles.input}
              onChangeText={(value) => setUsrNome(value)} />

            <TouchableOpacity style={Styles.button2}>
            <Text style={Styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}