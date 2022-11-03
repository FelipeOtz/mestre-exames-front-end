import { StyleSheet } from "react-native";

const primaryBlue = "#3785f4";
const defaultYellow = "#f9c259";

export default StyleSheet.create({
  homeContainer: {
    backgroundColor: primaryBlue,
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: "15%",
  },
  primaryText: {
    color: "#000",
    fontSize: 18,
  },
  secondaryText: {
    color: defaultYellow,
    fontSize: 18,
  },
  logo: {
    width: 165,
    height: 140,
    resizeMode: "cover",
  },
  carousel: {
    backgroundColor: "purple",
    width: 300,
    height: 350,
  },
  carouselImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
