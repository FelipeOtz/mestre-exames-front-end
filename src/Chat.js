import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Styles from "../styles/Chat";

const msg = [];

const renderItem = ({ item }) => {
  let id = item.id;
  let content = item.content;
  let estilo = item.estilo;

  if (msg.length == 1) {
    msg.push({
      id: msg.length + 1,
      content: "Olá, a Mestre Exames Agradece o seu contato!",
      estilo: "received",
    });
    msg.push({
      id: msg.length + 1,
      content: "Em que Podemos Ajudar?",
      estilo: "received",
    });
  }

  if (msg.length == 4) {
    msg.push({
      id: msg.length + 1,
      content: "Aguarde, em alguns instantes você será atendido",
      estilo: "received",
    });
  }

  return (
    <Text
      style={[
        Styles.send,
        {
          backgroundColor: estilo == "send" ? "#34B5F4" : "#A8AEB0",
          alignSelf: estilo == "send" ? "flex-end" : "flex-start",
        },
      ]}
    >
      {content}
    </Text>
  );
};

export default function ({ navigation }) {
  const [text, setText] = useState("");

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          underlayColor="transparent"
        >
          <Image
            source={require("../assets/icons/arrow-back-8-01.png")}
            style={Styles.arrowIcon}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/logo-01-azul.png")}
          style={Styles.headerImg}
        />
        <Text style={Styles.headerName}>Lilly</Text>
      </View>

      <View style={Styles.chatContainer}>
        <View style={Styles.chatBox}>
          <Text style={Styles.chatBoxTxt}>
            Precisa de um atendimento especializado? Conte com nossa equipe pra
            te ajudar no que for preciso
          </Text>
        </View>

        <FlatList
          style={{ height: "100%" }}
          data={msg}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={Styles.bottomContainer}>
        <TextInput
          style={Styles.TextInputChat}
          placeholder="Do que você precisa?"
          placeholderTextColor="#34B5F4"
          multiline={true}
          selectionColor="#34B5F4"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <TouchableOpacity
          onPress={() => {
            setText("");
            msg.push({ id: msg.length + 1, content: text, estilo: "send" });
          }}
        >
          <Image
            source={require("../assets/send-button.png")}
            style={Styles.sendButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
