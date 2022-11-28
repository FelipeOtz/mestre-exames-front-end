import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Alert } from "react-native";
import Styles from "../styles/Agendar";


export default function ({ navigation }) {

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
        <Text style={Styles.title}>Agendar</Text>
        <View></View>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 10, height: "85%" }}>
      
        <View style={Styles.stepDiv}>
            <Text style={Styles.title}>1. Selecione um Exame</Text>
            <TouchableOpacity style={Styles.selectButtonEnabled} onPress={() => navigation.navigate("Agendar2")} activeOpacity={0.9}>
                <Text style={Styles.selectButtonText}>Selecionar Exame</Text>
            </TouchableOpacity>
        </View>
        <View style={Styles.stepDiv}>
            <Text style={Styles.titleDisabled}>2. Selecione uma Unidade</Text>
            <TouchableOpacity style={Styles.selectButtonDisabled}>
            <Text style={Styles.selectButtonTextDisabled}>Selecionar Unidade</Text>
            </TouchableOpacity>
        </View>
        <View style={Styles.stepDiv}>
            <Text style={Styles.titleDisabled}>3. Escolha data e horário</Text>
            <TouchableOpacity style={Styles.selectButtonDisabled}>
            <Text style={Styles.selectButtonTextDisabled}>Selecionar data</Text>
            </TouchableOpacity>
        </View>
        <View style={Styles.stepDiv}>
        <TouchableOpacity style={Styles.selectButtonDisabled}>
        <Text style={Styles.AgendarButtonTextDisabled}>Agendar</Text>
        </TouchableOpacity>
        </View>




      </View>
    </View>
  );
}
