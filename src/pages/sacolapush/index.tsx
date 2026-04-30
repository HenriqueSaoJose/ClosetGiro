import React, { useContext, useRef, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { style } from "./styles";
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import { Themes } from "../../global/themes";
import { PropCard, AuthContextType } from "../../global/Props";
import { AuthContextList } from "../../context/authContext_list";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "../../components/Input";

export default function SacolaPush( ){

    const [cliente,setCliente] = useState("")
    const [telefone,setTelefone] = useState("")
    const [endereco,setEndereco] = useState("")

    const {taskList,handleDelete,handleEdit,filter} = useContext<AuthContextType>(AuthContextList)!;

    const swipeableRefs = useRef<(Swipeable | null)[]>([]);

    const navigation = useNavigation<NavigationProp<any>>();

    const renderRightActions = () => (
        <View style={style.button}>
          {/* <AntDesign 
            name="delete"
            size={20}
            color={'#FFF'}
          /> */}
        </View>
    );

    const renderLeftActions = () => (
        <View style={[style.button,{backgroundColor:Themes.Colors.blueLight}]}>
            {/* <AntDesign 
                name="edit"
                size={20}
                color={'#FFF'}
            /> */}
        </View>
    );

    const handleSwipeOpen = (direction: string, item: PropCard, index: number) => {
        if (direction === 'right') {
            handleDelete(item)
            swipeableRefs.current[index]?.close();
        } else if (direction === 'left') {
            handleEdit(item)
            swipeableRefs.current[index]?.close();
        }
    }

    const _renderCard = (item:PropCard,index:number) =>{        
        const color  = item.flag === 'opcional'?Themes.Colors.blueLight:Themes.Colors.red
        return (
            <Swipeable  
                ref={(ref: any) => swipeableRefs.current[index] = ref as Swipeable | null} 
                key={item.item} 
                renderRightActions={renderRightActions} 
                renderLeftActions={renderLeftActions}
                onSwipeableOpen={(direction: string) => handleSwipeOpen(direction,item,index)}
                
            >
                <View style={style.card}>
                    <View style={style.rowCard}>
                        <View style={style.rowCardLeft}>
                            <Ball color={color} />
                            <View>
                                <Text style={style.titleCard}>{item.title}</Text>
                                <Text style={style.descriptionCard}>{item.description}</Text>
                                {/* <Text style={style.descriptionCard}>até {formatDateToBR(item.timeLimit)}</Text> */}
                            </View>
                        </View>
                        <Flag 
                            caption={item.flag || 'urgente'} 
                            color={color} 
                        />
                    </View>
                </View>
            </Swipeable >
        )
    }
    
    return(
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.titleFrame}>
                    <Text style={style.greeting}>Sacola Push </Text>
                </View>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Main')}>
                    <Ionicons name="arrow-undo-outline" size={35} color="white" />
                </TouchableOpacity>
            </View>
            <View style={style.boxList}>

                <Input
                    title='Cliente :'
                    value={cliente}
                    onChangeText={setCliente}
                />

                <View style={style.containerInput}>
                    <Text style={{fontSize:18}}>Telefone :</Text>
                    <TextInput style={style.inputGeneric} onChangeText={setTelefone} value={telefone} placeholder="(19) 99999-9999"/>
                </View>

                <View style={style.containerInput}>
                    <Text style={{fontSize:18}}>Endereco :</Text>
                    <TextInput style={style.inputGeneric} onChangeText={setEndereco} value={endereco} placeholder=""/>
                </View>
                <View style={style.header}>
                    <View style={style.button}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Main')}>
                            <Text style={style.btnText}>Finaliza</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.button}>
                        <TouchableOpacity onPress={() => navigation.navigate('AddItem')}>
                            <Text style={style.btnText}>Adicionar Item</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )

}    
