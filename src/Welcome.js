import React from "react";
import { View, Text, Button, Image } from "react-native";
import Styles from "../styles/Welcome";


const welcome = () =>{
    return(
            <View style={Styles.homeContainer}>
                <Image
                    source={require('../assets/logo-01-branco.png')}
                    style={Styles.logo}
                />
                <Button
                    title="Click Here"
                    color="#841584"   
                />
               
            </View>   
    )
}


export default welcome;