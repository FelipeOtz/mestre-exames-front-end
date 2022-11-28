import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, Image, Alert, FlatList} from "react-native";
import Styles from "../../styles/Agendar";
import DataExames from "./DataExames"


export default function ({ navigation }, props) {

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
    
        <Text style={Styles.TelaAgendarTitle}>Selecione Um Exame</Text>
        <FlatList
            data={DataExames}
            keyExtractor={item=>item.id}
            renderItem= {({ item }) => 
              <TouchableOpacity
            style={Styles.TelaAgendarExamItem}
            activeOpacity={0.9}
            underlayColor="#3779f4"
            onPress={()=> Alert.alert(
              "Detalhes do Exame",
              `${item.descricao}\n\nRecomendações: ${item.recomendacao}\nDuração: ${item.duracao} minutos`,
              [
                {
                  text: 'Agendar', onPress: ()=> {navigation.navigate('Agendar3', {exame: item.nome})}
                },
              ],
              {
                cancelable: true
              }
            )}
        
        >
            <Image source={{ uri: item.icon }} style={Styles.TelaAgendarexamIcon} />
            <Text style={Styles.TelaAgendarExamItemNome}>{item.nome}</Text>
        </TouchableOpacity>
            }
          
        />
    </View>
    )}