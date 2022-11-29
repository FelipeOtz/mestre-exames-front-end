import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import Styles from "../styles/home";
import CardsAgendamento from "./components/CardsHomeAgendamento";

import Chat from "./Chat";

const Home = ({ navigation, route }) => (
  <View style={Styles.container}>
    <Image source={require("../assets/Ellipse.png")} style={Styles.logo} />

    <TouchableOpacity
      style={Styles.accountBtn}
      onPress={() => {
        navigation.navigate("Conta");
      }}
    >
      <Image source={require("../assets/account.png")} style={Styles.account} />
    </TouchableOpacity>

    <Text style={Styles.textName}>Olá, {route.params.nome}</Text>

    <TouchableOpacity
      style={Styles.chatbutton}
      onPress={() => {
        navigation.navigate("Chat");
      }}
    >
      <Image source={require("../assets/chat.png")} style={Styles.chat} />
    </TouchableOpacity>
    <Image source={require("../assets/lilly.png")} style={Styles.lilly} />

    <Text style={Styles.textName2}>Próximos exames:</Text>
    <View style={Styles.panel}>
      <CardsAgendamento />
    </View>
  </View>
);
export default Home;
