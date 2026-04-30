import { Dimensions, StyleSheet} from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({ 
    container:{
        flex:1,
        backgroundColor: themas.Colors.backgroundcolor,        
        alignItems:'center',
    },
    header:{
        width:'100%',
        height:Dimensions.get('window').height/10,
        backgroundColor:themas.Colors.backgroundcolor,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,  
    },
    boxList:{
        flex:1,
        width:'100%',
        //backgroundColor:'red'
    },    
    titleFrame:{
        height:46,
        borderWidth:2,
        backgroundColor:themas.Colors.buttoncolor,
        borderColor:themas.Colors.primary,
        borderRadius:10,
        paddingHorizontal:12,
        justifyContent:'center',
    },
    greeting:{
        fontSize:20,
        color:themas.Colors.TitleColor,
        fontFamily:themas.Fonts.fntTitle
    },
    button:{
        height:46,
        minWidth:46,
        backgroundColor:themas.Colors.buttoncolor,
        padding:5,
        borderRadius:10,   
        justifyContent:'center',
        alignItems:'center',
    },
    containerInput:{
      width:"100%",
      height:Dimensions.get('window').height/8,
      gap:5,
      display: 'flex',
      padding:15,
      flexDirection: 'column',
      alignItems : "flex-start"

    },
    inputGeneric :{
      width:"95%",
      height:"100%",
      backgroundColor: themas.Colors.secondary,
      borderRadius:15,
      paddingHorizontal:5, 
      borderWidth: 2,
      borderColor: "transparent",
      fontSize: 18,
    },        
    boxInput:{
        width:'80%'
    },
    card:{
        width:'100%',
        minHeight:60,
        backgroundColor:'#FFF',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor:themas.Colors.lightGray
    },
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    titleCard:{
        fontSize:16,
        fontWeight:'bold'
    },
    descriptionCard:{
        color:themas.Colors.gray
    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    btnText:{
        color: themas.Colors.TitleColor,
        fontSize:16,
        fontWeight:"600",
        width: 150,
    },   
})