import React from "react";
import { Text, View, TouchableHighlight, Image, Alert } from "react-native";
import CardsAgendamento from "./components/CardsAgendamento";
import Styles from "../styles/Agendamentos";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function () {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={() => Alert.alert("Clicou", "Clickou em Voltar")}
          underlayColor="transparent"
        >
          <Image
            source={require("../assets/icons/return-arrow-1.png")}
            style={Styles.icon}
          />
        </TouchableOpacity>
        <Text style={Styles.title}>Meus Agendamentos</Text>
        <View></View>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 10, height: "85%" }}>
        <CardsAgendamento />
      </View>
    </View>
  );
}
