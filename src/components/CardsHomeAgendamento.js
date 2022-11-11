import React from "react";
import { useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import Styles from "../../styles/home";
import agendamentos from "./DataAgendamentos";
import CardPin from "./homeCardPin";

//id, status, nome, icone, undidade, data, hora

const renderItem = ({ item }) => {
  let id = item.id;
  let status = item.status;
  let nome = item.nome;
  let unidade = item.unidade;
  let data = item.data;
  let dia = item.data.split("/")[0];
  let mes = item.data.split("/")[1];
  let ano = item.data.split("/")[2];
  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let nomeMes = meses[mes - 1];
  let hora = item.hora;
  let icon = item.icon;
  let color = "#D1CFCF";

  if (status.toLowerCase() == "realizado") {
    color = "#2FA82C";
  } else if (status.toLowerCase() == "agendado") {
    color = "#F9C259";
  }

  return (
    <View style={Styles.card}>
      <View style={Styles.cardHeader}>
        <CardPin />
        <Text style={Styles.cardTextHeader}>{nomeMes}</Text>
      </View>

      <View style={Styles.cardBlockShadow}>
        <View style={Styles.cardBlock}></View>
      </View>
    </View>
  );
};

export default function Card() {
  return (
    <View>
      <FlatList
        data={agendamentos.filter(
          (agendamento) => agendamento.status === "agendado"
        )}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
