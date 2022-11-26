import React from "react";
import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Alert} from "react-native";
import Styles from "../../styles/Agendamentos";
import agendamentos from "./DataAgendamentos";
//id, status, nome, icone, undidade, data, hora




const renderItem = ({ item }) => {
  let id = item.id;
  let status = item.status;
  let nome = item.nome;
  let unidade = item.unidade;
  let data = item.data;
  let hora = item.hora;
  let icon = item.icon;
  let color = "#D1CFCF";

  if (status.toLowerCase() == "realizado") {
    color = "#2FA82C";
  } else if (status.toLowerCase() == "agendado") {
    color = "#F9C259";
  }

  return (
    <TouchableOpacity
      style={Styles.cardAgendamento}
      underlayColor={"#FFF"}
      onPress={() => { Alert.alert('Detalhes do Agendamento',
        `${nome}\n\nID: ${id}\nStatus: ${status}\nUnidade: ${unidade}\nData: ${data} - ${hora}`,
        [
          {
            text: 'Gerar PDF',
            onPress: ()=> {console.log('Vai Gerar o PDF')}
          },
          {
            text: 'Cancelar',
            onPress: ()=> {console.log('Vai Cancelar o Exame')}
          },
        ],
        {
          cancelable: true
        }
          )
        }
      }
    >



      <View style={Styles.cardLine}>
        <View>
          <Image source={{ uri: icon }} style={Styles.examIcon} />
        </View>
        <View>
          <View>
            <Text style={Styles.primary}>{id} </Text>
          </View>
          <View>
            <Text style={Styles.primary}>{nome}</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              textTransform: "uppercase",
              padding: 5,
              backgroundColor: color,
              width: 100,
              textAlign: "center",
              fontWeight: "bold",
              // color: '#FFF'
            }}
          >
            {status}
          </Text>
        </View>
      </View>
      <View>
        <Text style={Styles.secondary}>Unidade: {unidade}</Text>
      </View>
      <View style={Styles.cardLine}>
        <View>
          <Text style={Styles.secondary}>{data}</Text>
        </View>
        <View>
          <Text style={Styles.secondary}>{hora}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Card() {
  return (
    <View>
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
