import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: themas.Colors.brackgroundcolor,
    },
    boxTop:{
        flex:1,
        marginTop:100,
        alignItems:'center',
        justifyContent:'center',
        height: Dimensions.get('window').height/5,
    },
    boxMid:{
        flex:1,
        width: '100%',
        height: Dimensions.get('window').height/10,
        alignItems:'center',
        padding:20,
        gap:40,
    },
    txtTitle:{
        fontSize:75,
        height:"auto",
        fontFamily: themas.Fonts.fntTitle,
        color: themas.Colors.TitleColor,
    },
    txtSubtitle:{
        fontSize:25,
        fontWeight:"500",
        color: themas.Colors.TitleColor,
    },
    btnMain:{
        width:300,
        height:50,
        backgroundColor: themas.Colors.primary,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:6,
    },
    btnText:{
        color: themas.Colors.TitleColor,
        fontSize:16,
        fontWeight:"600",
    },
})