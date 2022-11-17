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
    height: "35%",
    borderRadius: 15,
  },
  panelText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: 135,
    height: "75%",
    borderRadius: 20,
    alignSelf: "center",
    marginHorizontal: 13,
    elevation: 10,
    alignItems: "center",
  },

  cardHeader: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3674ed",
    width: "100%",
    height: 45,
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
    elevation: 10,
  },

  cardPinHold: {
    position: "absolute",
    top: -8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    width: "100%",
  },
  cardBlock: {
    backgroundColor: "#f9f9f9",
    width: 65,
    height: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.7,
    elevation: 4,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cardSeparator: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
    paddingHorizontal: 10,
  },
  cardBlockText: {
    color: "#3674ed",
    fontSize: 12,
    fontWeight: "700",
  },
  cardDescText: {
    color: "#828282",
    fontSize: 12,
    fontWeight: "700",
  },
  examCard: {
    paddingTop: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  examDesc: {
    backgroundColor: "#f9f9f9",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.7,
    elevation: 4,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 65,
  },
  examIcon: {
    width: 40,
    height: 40,
  },
});
