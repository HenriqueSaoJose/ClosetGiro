import { StyleSheet,Dimensions} from "react-native";
import { Themes } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Themes.Colors.backgroundcolor,
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
        fontFamily: Themes.Fonts.fntTitle,
        color: Themes.Colors.TitleColor,
    },
    txtSubtitle:{
        fontSize:25,
        fontWeight:"500",
        color: Themes.Colors.TitleColor,
    },
    btnMain:{
        width:300,
        height:50,
        backgroundColor: Themes.Colors.buttoncolor,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:6,
    },
    btnText:{
        color: Themes.Colors.TitleColor,
        fontSize:16,
        fontWeight:"600",
    },
})