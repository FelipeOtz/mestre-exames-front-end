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
    width: 130,
    height: "75%",
    borderRadius: 20,
    alignSelf: "center",
    marginHorizontal: 17,
  },

  cardHeader: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3674ed",
    width: "100%",
    height: "30%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  cardTextHeader: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
    textShadowColor: "#1f1f1f",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },

  cardHeaderPin: {
    backgroundColor: "#b5b5b5",
    height: 17,
    width: 7,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },

  cardPinHold: {
    position: "absolute",
    top: -8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    width: "100%",
    zIndex: -1,
  },
  cardBlock: {
    backgroundColor: "#949494",
    width: 20,
    height: 20,
  },
  cardBlockShadow: {
    backgroundColor: "#000",
    width: 20,
    height: 20,
    bottom: 0,
  },
});
