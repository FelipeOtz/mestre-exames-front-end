import { StyleSheet } from "react-native";
import { Dimensions, Platform, StatusBar } from "react-native";

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
  },
  header: {
    marginTop: 10,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "3%",
  },
  icon: {
    width: 20,
    height: 20,
    padding: 15,
  },
  examIcon: {
    width: 40,
    height: 40,
    padding: 5,
  },
  title: {
    color: "#3779f4",
    fontSize: 22,
    fontWeight: "bold",
  },
  cardAgendamento: {
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#DFE1E5",
    marginBottom: 5,
    paddingLeft: 5,
  },
  cardLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 15,
  },
  primary: {
    fontWeight: "bold",
  },
  secondary: {
    fontWeight: "bold",
    color: "#34B5F4",
    paddingRight: 5,
  },
});

export default Styles;
