import React, { useState } from "react";
import { View, Text, TextInput, Picker, TouchableOpacity, Alert } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { style } from "./styles";
import { Input } from "../../components/Input";

export default function AddItem (){

    const [nome,setNome] = useState("")
    const [tamanho,setTamanho] = useState("")
    const [quantidade,setQuantidade] = useState("")
    const [cod,setCod] = useState("")

    const navigation = useNavigation<NavigationProp<any>>();

    async function saveClothes(){
        navigation.navigate('SacolaPush')        
        if(nome === "" || tamanho === "" || quantidade === "" || cod === ""){
            Alert.alert("Erro","Preencha todos os campos")
            console.log("Preencha todos os campos")
        } else {
            // const response = await InsertClothes(cod,nome,tamanho,parseInt(quantidade))
            // if( response.sucess ){
            //     router.back()
            // }
        }
    }
    
    return (
        <View style={style.ContainerMain}>
            <View style={style.ContainerMenu}>
                <View style={style.ContainerText}>
                    <Text style={style.fontmain}>Novo Item</Text>
                </View>
                <TouchableOpacity style={style.buttonEstoque} onPress={()=>{saveClothes()}}>
                    <Ionicons name="save" size={35} color="white" />
                </TouchableOpacity>
            </View>
            <View style={style.ContainerForm}>
                <Input
                    title="Nome:"
                    onChangeText={setNome}
                    value={nome}
                    placeholder="Camiseta Preta"
                />


                <View style={style.containerInput}>
                    <Text style={{fontSize: 18}}>Tamanho:</Text>
                    <Picker selectedValue={tamanho} onValueChange={(itemValue)=>setTamanho(itemValue)} style={style.inputGeneric}>
                        <Picker.Item label="PP" value="PP" />
                        <Picker.Item label="P" value="P" />
                        <Picker.Item label="M" value="M" />
                        <Picker.Item label="G" value="G" />
                        <Picker.Item label="GG" value="GG" />
                    </Picker>
                </View>

                <View style={style.containerInput}>
                    <Text style={{fontSize: 18}}>Quantidade:</Text>
                    <TextInput style={style.inputGeneric} onChangeText={setQuantidade} value={quantidade} keyboardType="numeric" placeholder=""/>
                </View>

                <View style={style.containerInput}>
                    <Text style={{fontSize: 18}}>Código:</Text>
                    <TextInput style={style.inputGeneric} onChangeText={setCod} value={cod} placeholder="Código da peça"/>
                </View>
            </View>
        </View>    
    )
}

 