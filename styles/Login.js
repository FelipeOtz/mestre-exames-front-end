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
     fontWeight: 'bold',
     color: '#3785F4',
     marginTop: 28,
     marginBottom: 12,
   },
   text:{
     color: '#a1a1a1'
   },
   button:{
     position: 'absolute',
     backgroundColor: '#3785F4',
     borderRadius: 50,
     paddingVertical: 8,
     width: '60%',
     alignSelf: 'center',
     bottom: '15%',
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
   },
});
