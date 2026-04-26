import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";

export default function Main (){
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.txtTitle}>Moda Intima</Text>
                <Text style={style.txtSubtitle}>Controle de sacolas</Text>
            </View>
            <View style={style.boxMid}> 
                <TouchableOpacity style={style.btnMain}>
                    <Text style={style.btnText}>Enviar Sacola</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.btnMain}>
                    <Text style={style.btnText}>Retirar Sacola</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}