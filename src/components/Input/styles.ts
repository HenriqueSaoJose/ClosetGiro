import { StyleSheet } from 'react-native';
import { Themes } from "../../global/themes";

export const style = StyleSheet.create ({
    boxInput:{
        width:'100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: Themes.Colors.bdColor,
        backgroundColor: Themes.Colors.bgInput,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    titleInput:{
        marginLeft:5,
        marginTop:20,
        color: Themes.Colors.gray,
    },
    input:{
        width:'100%',
        height:'100%',
        borderRadius: 40,
        backgroundColor: Themes.Colors.bgInput,
        paddingHorizontal: 20,
    },
    button:{
        width:'10%',
    },
    icon:{
        width:'100%',
    }
})