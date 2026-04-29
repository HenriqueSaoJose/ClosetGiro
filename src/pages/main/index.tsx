import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function Main (){
    const navigation = useNavigation<NavigationProp<any>>();
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.txtTitle}>Moda Intima</Text>
                <Text style={style.txtSubtitle}>Controle de sacolas</Text>
            </View>
            <View style={style.boxMid}> 
                <TouchableOpacity 
                    style={style.btnMain}
                    onPress={() => navigation.navigate('SacolaPush')}
                    >
                    <Text style={style.btnText}>Enviar Sacola</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={style.btnMain}
                    onPress={() => navigation.navigate('SacolaPull')}
                    >
                    <Text style={style.btnText}>Retirar Sacola</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}