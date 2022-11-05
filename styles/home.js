import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  panel: {
    backgroundColor: "#14486F",
    flexDirection: "row",
    width: "90%",
    height: "30%",
    borderRadius: 15,
  },
  panelText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: "35%",
    height: "75%",
    borderRadius: 20,
    margin: 25,
  },

  cardTop: {
    backgroundColor: "#007DF0",
    width: "100%",
    height: "20%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
