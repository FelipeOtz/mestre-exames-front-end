import { StyleSheet } from "react-native";
import { Dimensions, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-between",
    color: "orange",
  },
  image: {
    alignItems: "center",
  },
  fundo: {
    backgroundColor: "#3785F4",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "100%",
  },
  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    width: "100%",
  },
  title: {
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    color: "#a1a1a1",
    paddingStart: 10,
    color: "#FFF",
  },
  textCima: {
    color: "#a1a1a1",
    paddingStart: 10,
    color: "#FFF",
    marginTop: 55,
  },
  button: {
    backgroundColor: "#FFF",
    paddingVertical: 8,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    backgroundColor: "#F9C259",
    paddingVertical: 8,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#FFF",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "95%",
    borderRadius: 5,
    borderColor: "#FFF",
    alignSelf: "center",
    backgroundColor: "#FFF",
    color: "#000",
  },
  forgot: {
    color: "#F9C259",
    paddingStart: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
  },
  enterUsing: {
    marginTop: "10%",
    color: "#939CAA",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  mediaIcon: {
    width: 35,
    height: 35,
  },
  link: {
    backgroundColor: "#1DA1F2",
    width: 135,
    height: 45,
    marginVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  linkTxt: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 17,
  },
  links: {
    width: "80%",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  //  buttonTwitter:{
  //   backgroundColor: '#1DA1F2',
  //   paddingVertical: 8,
  //   width: '50%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginRight: 50
  //  },
  //  buttonFacebook:{
  //   backgroundColor: '#4267B2',
  //   paddingVertical: 8,
  //   width: '80%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: "row",
  //   flex: 1
  //  },

  cadastreSe: {
    alignSelf: "center",

    flexDirection: "row",
  },
  dontHaveAccount: {
    color: "#939CAA",
    fontSize: 16,
    fontWeight: "bold",
  },
});
