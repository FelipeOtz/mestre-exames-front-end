import React from "react";
import { Image, View } from "react-native";
import Styles from "../../styles/Welcome";

export default () => {
  return (
    <View style={Styles.carousel}>
      <Image
        source={require("../../assets/carousel/carousel-01.png")}
        style={Styles.carouselImg}
      />
    </View>
  );
};
