import { StyleSheet } from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
     width: '100%',
     height: '100%',
     flex: 1,
     backgroundColor: "#FFF",
     alignItems: "center",
     justifyContent: "center",
     color: 'orange',
     paddingStart: 10
   },
   image:{
     alignSelf: "flex-start"
   },
   containerLogo:{
     flex:2,
     justifyContent: 'center',
     alignItems: 'center'
   },
   containerForm:{
     flex:1,
     backgroundColor: '#FFF',
     borderTopLeftRadius: 25,
     borderTopRightRadius: 25,
     paddingStart: '5%',
     paddingEnd: '5%'
   },
   title:{
     fontSize: 24,
     alignItems: "center",
     justifyContent: "center",
     fontWeight: 'bold',
     color: '#3785F4',
     marginTop: 15,
     marginBottom: 12,
   },
   text:{
     color: '#a1a1a1',
     paddingStart: 10,
     color: '#3785F4',
   },
   button:{
     backgroundColor: '#3785F4',
     paddingVertical: 8,
     width: '80%',
     alignSelf: 'center',
     alignItems: 'center',
     justifyContent: 'center'
   },
   buttonText:{
     fontSize: 18,
     color: '#FFF',
     fontWeight: 'bold'
   },
   input: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
     width: 250,
     borderRadius: 5,
     borderColor: '#3785F4',
   },
   forgot:{
    color: '#F9C259',
    paddingStart: 10
   },
   link:{
    position: "absolute",
    bottom: 150,
    paddingStart: 105,
    color: "#939CAA"
   },
   links: {
    width: '80%',
    alignItems: 'center',
    flex: 1,
    flexDirection: "row",
   },
   buttonTwitter:{
    backgroundColor: '#1DA1F2',
    paddingVertical: 8,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50
   },
   buttonFacebook:{
    backgroundColor: '#4267B2',
    paddingVertical: 8,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    flex: 1
   },
});