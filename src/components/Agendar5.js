import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Alert } from "react-native";
import Styles from "../../styles/Agendar";


    
export default function ({ navigation }) {
    const route = useRoute();
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          underlayColor="transparent"
        >
          <Image
              source={require("../../assets/icons/return-arrow-1.png")}
            style={Styles.icon}
          />
        </TouchableOpacity>
        <Text style={Styles.title}>Agendar</Text>
        
        <View></View>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 10, height: "85%" }}>
      
        <View style={Styles.stepDiv}>
            <Text style={Styles.title}>1. Selecione um Exame</Text>
       
            <TouchableOpacity style={Styles.selectButtonEnabled}
                activeOpacity={0.9}
                // onPress={() => navigation.navigate("Agendar3")}
                >
                <Text style={Styles.selectButtonText}>{route.params.exame}</Text>
            </TouchableOpacity>
        </View>
        <View style={Styles.stepDiv}>
            <Text style={Styles.title}>2. Selecione uma Unidade</Text>
            <TouchableOpacity
                style={Styles.selectButtonEnabled}
                activeOpacity={0.9}
                // onPress={() => navigation.navigate("Agendar4")}                
            >
            <Text style={Styles.selectButtonText}>{route.params.unidade}</Text>
            </TouchableOpacity>
        </View>
        <View style={Styles.stepDiv}>
            <Text style={Styles.title}>3. Escolha data e horário</Text>
            <TouchableOpacity style={Styles.selectButtonEnabled}>
            <Text style={Styles.selectButtonText}>Selecionar data</Text>
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
