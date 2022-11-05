import React from "react";
import { useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import Styles from "../../styles/Agendamentos";

//id, status, nome, icone, undidade, data, hora

const agendamentos=[    
    {
        id: '047677522',
        status: 'realizado',
        nome: 'Hemograma',
        unidade: 'Osasco',
        data: '16/11/2022',
        hora: '15:30',
        icon: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-lab-virus-xnimrodx-lineal-color-xnimrodx.png'
    },
    {
        id: '047673486',
        status: 'agendado',
        nome: 'Colesterol Total',
        unidade: 'Osasco',
        data: '20/10/2022',
        hora: '09:15',
        icon: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-petri-dish-virus-xnimrodx-lineal-color-xnimrodx.png'
    },
    {
        id: '047673335',
        status: 'cancelado',
        nome: 'Colesterol Total',
        unidade: 'Osasco',
        data: '16/10/2022',
        hora: '09:00',
        icon: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-syringes-virus-xnimrodx-lineal-color-xnimrodx.png'
    },
    {
        id: '447677522',
        status: 'realizado',
        nome: 'Hemograma',
        unidade: 'Osasco',
        data: '16/11/2022',
        hora: '15:30',
        icon: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-lab-virus-xnimrodx-lineal-color-xnimrodx.png'
    },
    {
        id: '247673486',
        status: 'agendado',
        nome: 'Colesterol Total',
        unidade: 'Osasco',
        data: '20/10/2022',
        hora: '09:15',
        icon: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-petri-dish-virus-xnimrodx-lineal-color-xnimrodx.png'
    },
    {
        id: '147673335',
        status: 'cancelado',
        nome: 'Colesterol Total',
        unidade: 'Osasco',
        data: '16/10/2022',
        hora: '09:00',
        icon: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-syringes-virus-xnimrodx-lineal-color-xnimrodx.png'
    },
    {
        id: '447117522',
        status: 'realizado',
        nome: 'Hemograma',
        unidade: 'Osasco',
        data: '16/11/2022',
        hora: '15:30',
        icon: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-lab-virus-xnimrodx-lineal-color-xnimrodx.png'
    },
    {
        id: '217673486',
        status: 'agendado',
        nome: 'Colesterol Total',
        unidade: 'Osasco',
        data: '20/10/2022',
        hora: '09:15',
        icon: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-petri-dish-virus-xnimrodx-lineal-color-xnimrodx.png'
    },
    {
        id: '147673355',
        status: 'cancelado',
        nome: 'Colesterol Total',
        unidade: 'Osasco',
        data: '16/10/2022',
        hora: '09:00',
        icon: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/512/external-syringes-virus-xnimrodx-lineal-color-xnimrodx.png'
    },
]

const renderItem = ({item}) =>{
    let id = item.id;
    let status = item.status;
    let nome = item.nome;
    let unidade = item.unidade;
    let data = item.data;
    let hora = item.hora;
    let icon = item.icon;
    let color = '#D1CFCF';

    if(status.toLowerCase() == 'realizado'){
        color = '#2FA82C';
      }else if (status.toLowerCase() == 'agendado'){
        color = '#F9C259';
      }

    return(
        <View style={Styles.cardAgendamento}>
            <View style={Styles.cardLine}>
                <View>
                    <Image
                        source={{uri: icon}}
                        style={Styles.examIcon}    
                    />
                </View>
                <View>
                    <View>
                        <Text style={Styles.primary}>{id} </Text>
                    </View>
                    <View>
                    <Text style={Styles.primary}>{nome}</Text>
                    </View>
                </View>
                <View>
                    <Text
                        style={
                            {textTransform: "uppercase",
                            padding: 5,
                            backgroundColor: color,
                            width: 100,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            // color: '#FFF'
                            }}>
                                {status}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={Styles.secondary}>Unidade: {unidade}</Text>
            </View>
            <View style={Styles.cardLine}>
                <View><Text style={Styles.secondary}>{data}</Text></View>
                <View><Text style={Styles.secondary}>{hora}</Text></View>
            </View>
        </View>
    )

}

export default function Card(){
    return(
        <View>
            <FlatList
                data={agendamentos}
                keyExtractor={item=>item.id}
                renderItem={renderItem}
            />
        </View>
    )    
}