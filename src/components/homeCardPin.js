import React from "react";

import { View } from "react-native";
import Styles from "../../styles/home";

export default function CardPin() {
  return (
    <View style={Styles.cardPinHold}>
      <View style={Styles.cardHeaderPin}></View>
      <View style={Styles.cardHeaderPin}></View>
      <View style={Styles.cardHeaderPin}></View>
      <View style={Styles.cardHeaderPin}></View>
      <View style={Styles.cardHeaderPin}></View>
    </View>
  );
}
