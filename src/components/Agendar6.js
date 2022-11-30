import { useRoute } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, Image, Alert, FlatList, Modal} from "react-native";
import Styles from "../../styles/Agendar";
import { Calendar } from 'react-native-calendars';
import DataUnidades from "./DataUnidade"

const horariosDisponiveis = [
    {id: '01',hora: '08:00'},{id: '02', hora: '08:15',}, {id: '03',hora: '08:30'},{id: '04', hora: '09:00',},
    {id: '05',hora: '10:15'},{id: '06', hora: '10:45',}, {id: '07',hora: '13:30'},{id: '08', hora: '14:00',},
    {id: '09',hora: '14:45'},{id: '10', hora: '15:00',}, {id: '11',hora: '15:15'},{id: '12', hora: '16:30',},
    ];

export default function ({ navigation }, props) {
  const route = useRoute();
    function setDates({day}){
        let dia = day.day;
        let mes = day.month;
        let ano = day.year;
        setDay(dia);
        setMonth(mes)
        setYear(ano);
    }
    const [day, setDay] = useState('28');
    const [month, setMonth] = useState('11');
    const [year, setYear] = useState('2022');
    const [horario, setHorario] = useState('');

    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            underlayColor="transparent"
          >
            <Image
              source={require("../../assets/icons/return-arrow-1.png")}
              style={Styles.icon}
            />
          </TouchableOpacity>
          <Text style={Styles.title}>Agendar</Text>
          <View></View>
        </View>    
        <Text style={Styles.TelaAgendarTitle}>Selecione Uma data</Text>
        <View style={Styles.TelaAgendarCalendarContainer}>
            <Calendar
                minDate={"2022-11-28"}
                maxDate={"2023-01-31"}
                hideExtraDays={true}
                markedDate={'2022-11-28'}
                // onDayPress={day => {
                //     console.log('selected day', day);
                //   }}
                onDayPress={day =>  setDates({day})}
            />
            
          <Text style={Styles.agendarHorariosBoxTitle}>Horários Disponíveis para {day}/{month}/{year}</Text>
          </View>
          
          <View>
            <FlatList
                style={Styles.horariosDisponiveisContainer}
                data={horariosDisponiveis}
                centerContent={true}
                keyExtractor={item => item.id}
                horizontal={true}
                justifyContent={'center'}
                alignSelf={'center'}
                renderItem={({ item }) =>
                <View>
                    <TouchableOpacity style={Styles.horariosDisponiveisBg} onPress={()=> setHorario(item.hora)}>
                        <Text style={Styles.horariosDisponiveisTxt}>{item.hora}</Text>
                    </TouchableOpacity>
                </View>
                }
            />
          </View>
          <TouchableOpacity
            style={Styles.btnConfirmar}
            onPress={()=> navigation.navigate("Agendar7",
              {
                unidade: route.params.unidade,
                exame: route.param.exame,
                  
              })}>




            <Text style={Styles.btnConfirmarTxt}>CONFIRMAR</Text>
          </TouchableOpacity>

          <Text style={Styles.txtConfirmar}>Agendar Exame para {day}/{month}/{year} - {horario}</Text>

    </View>
    )}