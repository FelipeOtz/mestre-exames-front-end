import { StyleSheet } from "react-native";
import { Dimensions, Platform, StatusBar } from "react-native";

const primaryBlue = "#3785f4";
const secondaryBlue = "#34B5F4";
const defaultYellow = "#f9c259";
const primaryGray = "#DFE1E5";
const secondaryGray = "#A8AEB0";

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: primaryBlue,
    alignItems: "center",
    justifyContent: "space-between",
    color: "orange",
  },
  header: {
    width: "100%",
    height: 65,
    backgroundColor: primaryBlue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  arrowIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  headerName: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 23,
  },
  headerImg: {
    width: 50,
    height: 50,

    backgroundColor: "#FFF",
    borderRadius: 25,
  },

  chatContainer: {
    backgroundColor: "#FFF",
    height: "100%",
    width: "100%",
  },
  chatBox: {
    marginTop: 15,
    width: "80%",
    backgroundColor: primaryBlue,
    alignSelf: "center",
    padding: 10,
    marginBottom: 10,
  },
  chatBoxTxt: {
    color: defaultYellow,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 23,
  },
  chatMessageBoxContainer: {},
  send: {
    backgroundColor: secondaryBlue,
    marginHorizontal: 10,
    marginBottom: 5,
    padding: 10,
    color: "#FFF",
    fontSize: 16,
    alignSelf: "flex-end",
    borderRadius: 15,
  },

  received: {
    backgroundColor: secondaryGray,
    marginHorizontal: 10,
    marginBottom: 5,
    padding: 10,
    color: "#FFF",
    fontSize: 16,
    alignSelf: "flex-start",
    borderRadius: 15,
  },
  bottomContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 10,
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TextInputChat: {
    backgroundColor: "#E3E2E2",
    width: "85%",
    height: "auto",
    padding: 15,
    borderRadius: 25,
  },
  sendButton: {
    alignItems: "center",
    width: 50,
    height: 50,
    margin: 5,
  },
});
