import { ThemedText } from "@/components/themed-text";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";


export default function SacolaPullScreen(){
  return(
    <ThemedView style={styles.ContainerMain}>
          <ThemedView style={styles.ContainerMenu}>
            <ThemedView style={styles.ContainerText}>
              <ThemedText style={styles.fontmain}>Sacolas Enviada</ThemedText>
            </ThemedView>
            <Pressable style={styles.buttonEstoque} onPress={()=>{router.push("../estoque")}}>
              <Ionicons name="arrow-down-circle-outline" size={35} color="white" />
            </Pressable>
        </ThemedView>
        <ThemedView>

        </ThemedView>
    </ThemedView>
  )
}
const styles = StyleSheet.create({
    ContainerMain:{
        flex: 1,
        backgroundColor: '#E5B0BD',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'flex-start',
    },
    ContainerMenu:{
        height: 60,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        gap:"35%",
        justifyContent: 'flex-start',
        alignItems:'center',
    },
    ContainerText : {
      height:"93%",
      width: '50%',
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
      fontSize:30
    },
    buttonEstoque:{
      width: '13%',
      height:'86%',
      backgroundColor: "#7C3AED",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:100,
    }
})