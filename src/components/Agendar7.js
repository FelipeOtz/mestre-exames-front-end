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
            <TouchableOpacity
              style={Styles.selectButtonEnabled}
              activeOpacity={0.9}
              // onPress={() => navigation.navigate("Agendar6")}
            > 
            <Text style={Styles.selectButtonText}>{route.params.dataAgendamento} - {route.params.horarioAgendamento}</Text>
            </TouchableOpacity>
        </View>
        <View style={Styles.stepDiv}>
        <TouchableOpacity
          style={Styles.selectButtonEnabled}
          onPress={()=> 
            Alert.alert(
              "Exame Agendado com Sucesso!",
              'Detalhes do Agendamento: ' +
              '\n\nID: ' + Math.floor(100000000 + Math.random() * 900000000) + 
              '\nExame: ' + route.params.exame +
              '\nUnidade: ' + route.params.unidade +
              '\nData: ' + route.params.dataAgendamento +
              '\nHorario: ' + route.params.horarioAgendamento

            ,
              [
                {
                  text: 'ok',
                  onPress: () => navigation.navigate("Home")
                }
              ]
              )
            }
        >
        <Text style={Styles.AgendarButtonTextEnabled}>Agendar</Text>
        </TouchableOpacity>
        </View>




      </View>
    </View>
  );
}
