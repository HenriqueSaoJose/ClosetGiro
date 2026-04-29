import React, { useContext, useRef } from "react";
import { View, FlatList, Text } from "react-native";
import { style } from "./styles";
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import { themas } from "../../global/themes";
import { PropCard, AuthContextType } from "../../global/Props";
import { AuthContextList } from "../../context/authContext_list";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function SacolaPush( ){

    const {taskList,handleDelete,handleEdit,filter} = useContext<AuthContextType>(AuthContextList)!;

    const swipeableRefs = useRef<(Swipeable | null)[]>([]);

    const navigation = useNavigation<NavigationProp<any>>();

    const renderRightActions = () => (
        <View style={style.Button}>
          {/* <AntDesign 
            name="delete"
            size={20}
            color={'#FFF'}
          /> */}
        </View>
    );

    const renderLeftActions = () => (
        <View style={[style.Button,{backgroundColor:themas.Colors.blueLigth}]}>
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
        const color  = item.flag === 'opcional'?themas.Colors.blueLigth:themas.Colors.red
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
                <Text style={style.greeting}>Sacola Push </Text>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Main')}>
                    <Ionicons name="arrow-undo-outline" size={35} color="white" />
                </TouchableOpacity>
            </View>
            <View style={style.boxList}>
                <FlatList 
                    data={taskList}
                    style={{marginTop:40,paddingHorizontal:30}}
                    keyExtractor={(item,index)=>item.item.toString()}
                    renderItem={({item,index})=>{return(_renderCard(item,index))}}
                />
            </View>
        </View>
    )

}    
