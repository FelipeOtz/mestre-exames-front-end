import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  LogBox,
  ActivityIndicator,
} from "react-native";
import Styles from "../../styles/home";
import CardPin from "./homeCardPin";

LogBox.ignoreLogs(["key"]);

//id, status, nome, icone, undidade, data, hora

const renderItema = ({ item }) => {
  const options = { method: "GET" };

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

      <View style={Styles.cardSeparator}>
        <Text style={Styles.cardDescText}>Dia</Text>
        <View style={Styles.cardBlock}>
          <Text style={Styles.cardBlockText}>05, Seg.</Text>
        </View>
      </View>

      <View style={Styles.cardSeparator}>
        <Text style={Styles.cardDescText}>Horário</Text>
        <View style={Styles.cardBlock}>
          <Text style={Styles.cardBlockText}>10:00 AM</Text>
        </View>
      </View>
      <View style={Styles.examCard}>
        <Text style={Styles.cardDescText}>Exame</Text>
        <View style={Styles.examDesc}>
          <Text style={Styles.cardBlockText}>{nome}</Text>
          <Image source={{ uri: icon }} style={Styles.examIcon} />
        </View>
      </View>
    </View>
  );
};

export default function Card() {
  const [agendamentos, setAgendamentos] = useState(null);

  const [isloading, setIsloading] = useState(true);

  const getAgendamentos = () => {
    const options = { method: "GET" };
    fetch("http://54.94.200.75:8080/agendamento/find", options)
      .then((response) => response.json())
      .then((json) => {
        setAgendamentos(json);
        console.log(json);
      })
      .finally(() => {
        setIsloading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAgendamentos();
  }, []);

  return (
    <View>
      {isloading ? (
        <ActivityIndicator
          size="large"
          style={{ flex: 1, marginHorizontal: "50%" }}
        />
      ) : (
        <FlatList
          data={agendamentos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}
const renderItem = ({ item }) => {
  const dia = item.dataagendamento.split("/")[0];
  const mes = item.dataagendamento.split("/")[1];
  const ano = item.dataagendamento.split("/")[2];

  const nomeExame = item.exame.nome;

  const data = new Date(ano, mes, dia);

  const diasdasemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const diasemana = diasdasemana[data.getDay()];

  const horario = item.horario;

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

  return (
    <View style={Styles.card}>
      <View style={Styles.cardHeader}>
        <CardPin />
        <Text style={Styles.cardTextHeader}>{nomeMes}</Text>
      </View>

      <View style={Styles.cardSeparator}>
        <Text style={Styles.cardDescText}>Dia</Text>
        <View style={Styles.cardBlock}>
          <Text style={Styles.cardBlockText}>
            {dia}, {diasemana}.
          </Text>
        </View>
      </View>

      <View style={Styles.cardSeparator}>
        <Text style={Styles.cardDescText}>Horário</Text>
        <View style={Styles.cardBlock}>
          <Text style={Styles.cardBlockText}>{horario}</Text>
        </View>
      </View>
      <View style={Styles.examCard}>
        <Text style={Styles.cardDescText}>Exame</Text>
        <View style={Styles.examDesc}>
          <Text style={Styles.cardBlockText}>{nomeExame}</Text>
          <Image
            source={{
              uri: "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-petri-dish-virus-xnimrodx-lineal-color-xnimrodx.png",
            }}
            style={Styles.examIcon}
          />
        </View>
      </View>
    </View>
  );
};
