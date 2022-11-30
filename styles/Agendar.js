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
  titleDisabled:{
    color: "#adb5bd",
    fontSize: 22,
    fontWeight: "bold",
  },
  stepDiv :{
    marginBottom: 40
  },
  selectButtonEnabled: {
    backgroundColor: '#3779f4',
    height: 50,
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10
  },
  selectButtonDisabled: {
    backgroundColor: '#e5e5e5',
    height: 50,
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10
  },
  selectButtonText: {
    color: '#f9c259',
    fontSize: 17,
    fontWeight: 'bold'
  },
  selectButtonTextDisabled: {
    color: '#adb5bd',
    fontSize: 17
  },
  AgendarButtonTextDisabled:{
    color: '#adb5bd',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  AgendarButtonTextEnabled:{
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  TelaAgendarTitle: {
    marginBottom: 25,
    color: "#3779f4",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: 'center'
  },
  TelaAgendarExamItem:{
    flexDirection: 'row',
    backgroundColor: "#3779f4",
    alignItems: 'center',
    marginBottom: 5,
  },
  TelaAgendarexamIcon:{
    width: 40,
    height: 40,
    padding: 5,
  },
  TelaAgendarExamItemNome:{
    color: '#FFF',
    fontSize: 17
  },
  unidadeBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '1%', 
    width: '100%',
    height: 50,
    alignItems: 'center',

  },
  unidadeBoxTxt: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 17
  },
  unidadesModal: {
    width: 340,
    height: 'auto',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '15%',
    alignItems: 'center',
  },
  unidadesModalTitle: {
    color: '#3779f4',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    marginBottom: 10
  },
  unidadesModalImgBox:{
    width: '100%',
    textAlign: 'center'
  },
  unidadesModalImg :{
    width: 300,
    height: 200,
    marginBottom: 20
  },
  unidadesModalTxtDescription : {
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    lineHeight: 26
  },
  unidadesModalButtonsBox : {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  unidadesModalButtonsBg : {
    backgroundColor: '#e63946',
    width: 130,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  unidadesModalButtonsTxt : {
    fontSize: 20,
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  TelaAgendarCalendarContainer: {
    width: '90%',
    alignSelf: 'center'
  },
  agendarHorariosBoxTitle: {

    alignSelf: 'center',
    marginVertical: 25,
    flexDirection: 'row'
  },
  agendarHorariosTxt :{
    color: "#3779f4",
    fontSize: 19,    
  },
  agendarHorariosTx2 :{
    color: "#3779f4",
    fontSize: 19,
    fontWeight: "bold",    
  },
  horariosDisponiveisContainer: {
    width: 310,
    marginBottom: 30
  },
  horariosDisponiveisBg :{
    backgroundColor: '#90e0ef',
    margin: 5,
    padding: 5,
    borderRadius: 10
  },
  horariosDisponiveisTxt :{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 19
  },
  btnConfirmar: {
    backgroundColor: '#3779f4',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 35,
  },
  btnConfirmarTxt: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20
  },
  txtConfirmar: {
    fontSize: 16,
    alignSelf: 'center',
    color: "#3779f4",
    fontSize: 19,
    fontWeight: "bold",    
  }
});

export default Styles;
