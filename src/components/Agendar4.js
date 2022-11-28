import { useRoute } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, Image, Alert, FlatList, Modal} from "react-native";
import Styles from "../../styles/Agendar";
import DataUnidades from "./DataUnidade"


export default function ({ navigation }, props) {
  const [modal, toggleModal] = useState(false);
  const route = useRoute();
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
    
        <Text style={Styles.TelaAgendarTitle}>Selecione Uma Unidade</Text>
        <FlatList
            data={DataUnidades}
            keyExtractor={item=>item.id}
            renderItem= {({ item }) => 
        <TouchableOpacity
            style={Styles.TelaAgendarExamItem}
            activeOpacity={0.9}
            underlayColor="#3779f4"
            onPress={()=> toggleModal(!modal)}
        >
            <View style={Styles.unidadeBox}>
                <Text style={Styles.unidadeBoxTxt}>{item.nome}</Text>
                <Text></Text>
                <Text style={Styles.unidadeBoxTxt}>{item.bairro}</Text>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modal}
            >
                <View style={Styles.unidadesModal}>
                    <Text style={Styles.unidadesModalTitle}>{item.nome}</Text>
                      <Image
                        source={{ uri: item.imageURL }}
                        style={Styles.unidadesModalImg}
                      />
                    <Text style={Styles.unidadesModalTxtDescription}>{item.rua}, {item.numero}</Text>
                    <Text style={Styles.unidadesModalTxtDescription}>{item.complemento}, {item.bairro} - {item.cidade} {item.estado}</Text>
                    <Text style={Styles.unidadesModalTxtDescription}>Horário de Atendimento: {item.horarioatendimento}</Text>
                    <View style={Styles.unidadesModalButtonsBox}>
                        <TouchableOpacity style={Styles.unidadesModalButtonsBg} onPress={()=> toggleModal(!modal)}>
                          <Text style={Styles.unidadesModalButtonsTxt}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[
                          Styles.unidadesModalButtonsBg,
                          {backgroundColor: '#3779f4'}
                          ]}
                        onPress={() => navigation.navigate("Agendar5", {unidade: item.nome, exame: route.params.exame})}>
                        
                        <Text style={Styles.unidadesModalButtonsTxt}>Agendar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>

        </TouchableOpacity>
        }
          
        />
    </View>
    )}