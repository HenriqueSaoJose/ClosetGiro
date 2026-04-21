
import { Pressable, StyleSheet, TextInput , Alert } from "react-native";
import { ThemedText } from "@/components/themed-text";

import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from "@/components/themed-view";
import { Picker } from "@react-native-picker/picker";
import {  useState } from "react";
import { router } from "expo-router";
import { InsertClothes } from "../database/RoupasServices";


export default function AddItemScreen(){
  const [nome,setNome] = useState("")
  const[tamanho,setTamanho] = useState("")
  const [quantidade,setQuantidade] = useState("")
  
  // const[categoria,setCategoria] = useState("")
  const[cod,setcod] = useState("")

  async function saveClothes(){
    if(nome === "" || tamanho === "" || quantidade === "" || cod === ""){
      Alert.alert("Erro","Preencha todos os campos")
      console.log("Preencha todos os campos")
      }else{
      const response = await InsertClothes(cod,nome,tamanho,parseInt(quantidade))
      if(response.sucess){
        router.back()
      }
    }
  }
return(
  <ThemedView style={styles.ContainerMain}>
          <ThemedView style={styles.ContainerMenu}>
            <ThemedView style={styles.ContainerText}>
              <ThemedText style={styles.fontmain}>Novo Item</ThemedText>
            </ThemedView>
            <Pressable style={styles.buttonEstoque} onPress={()=>{saveClothes()}}>
              <Ionicons name="save" size={35} color="white" />
            </Pressable>
        </ThemedView>
        <ThemedView style={styles.ContainerForm}>
            <ThemedView style={styles.containerInput}>
              <ThemedText style={{fontSize:18}}>Nome:</ThemedText>
              <TextInput style={styles.inputGeneric} onChangeText={setNome} value={nome} placeholder="Camiseta Preta"/>
            </ThemedView>

             <ThemedView style={styles.containerInput}>
              <ThemedText style={{fontSize: 18}}>Tamanho:</ThemedText>
              <Picker selectedValue={tamanho} onValueChange={(itemValue)=>setTamanho(itemValue)} style={styles.inputGeneric}>
                <Picker.Item label="PP" value="PP" />
                <Picker.Item label="P" value="P" />
                <Picker.Item label="M" value="M" />
                <Picker.Item label="G" value="G" />
                <Picker.Item label="GG" value="GG" />
              </Picker>
            </ThemedView>

            <ThemedView style={styles.containerInput}>
              <ThemedText style={{fontSize: 18}}>Quantidade:</ThemedText>
              <TextInput style={styles.inputGeneric} onChangeText={setQuantidade} value={quantidade} keyboardType="numeric" placeholder=""/>
            </ThemedView>

            <ThemedView style={styles.containerInput}>
              <ThemedText style={{fontSize: 18}}>Código:</ThemedText>
              <TextInput style={styles.inputGeneric} onChangeText={setcod} value={cod} placeholder="Código da peça"/>
            </ThemedView>
        </ThemedView>
    </ThemedView>)
    }

 
  
const styles = StyleSheet.create({
    ContainerMain:{
        flex: 1,
        backgroundColor: '#E5B0BD',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'flex-start',
    }, ContainerMenu:{
        height: 60,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        gap:"25%",
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    ContainerText : {
      height:"92%",
      width: '58%',
      backgroundColor: "#C76A8A",
      display: 'flex',
      alignItems: 'flex-start',
      borderRadius: 5,
      marginTop:5,
      justifyContent: 'center',
      paddingHorizontal:10,
      shadowColor: "#000",
      shadowOffset: { width: 4, height: 8 },
      shadowOpacity: 0.27,
      shadowRadius: 19,
      elevation: 5,
    },
     fontmain:{
      fontFamily: 'Italianno_400Regular',
      color: "#ffff",
      fontSize:35
    },
    buttonEstoque:{
      width: '20%',
      height:'86%',
      backgroundColor: "#7C3AED",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:100,
    },
    ContainerForm:{
      width:"100%",
      height:"90%",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop:"5%",
      paddingLeft:"5%",
      gap:25
    },
    containerInput:{
      width:"90%",
      height:"20%",
      gap:6,
      display: 'flex',
      flexDirection: 'column',
      alignItems : "flex-start"

    },
    inputGeneric :{
      width:"90%",
      height:"45%",
      backgroundColor:"white",
      borderRadius:5,
      paddingHorizontal:5, 
      borderWidth: 2,
      borderColor: "transparent",
      fontSize: 16
    }
    
 
})