import { StyleSheet} from "react-native";
import { Themes } from "../../global/themes";

export const style = StyleSheet.create({
    ContainerMain:{
        flex: 1,
        backgroundColor: Themes.Colors.backgroundcolor,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'flex-start',
    }, 
    ContainerMenu:{
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
      backgroundColor: Themes.Colors.buttoncolor,
      display: 'flex',
      alignItems: 'flex-start',
      borderRadius: 5,
      marginTop:5,
      justifyContent: 'center',
      paddingHorizontal:10,
      shadowColor: Themes.Colors.blackTransparent,
      shadowOffset: { width: 4, height: 8 },
      shadowOpacity: 0.27,
      shadowRadius: 19,
      elevation: 5,
    },
     fontmain:{
      fontFamily: Themes.Fonts.fntTitle,
      color: Themes.Colors.TitleColor,
      fontSize:35
    },
    buttonEstoque:{
      width: '20%',
      height:'86%',
      backgroundColor: Themes.Colors.buttoncolor,
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
      backgroundColor: Themes.Colors.secondary,
      borderRadius:15,
      paddingHorizontal:5, 
      borderWidth: 2,
      borderColor: "transparent",
      fontSize: 16
    },
})