import { ThemedText } from "@/components/themed-text";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/themed-view";


export default function SacolaPullScreen(){
  return(
    <ThemedView style={styles.ContainerMain}>
          <ThemedView style={styles.ContainerMenu}>
            <ThemedText>Sacolas Enviada</ThemedText>
            <ThemedText>Estoque</ThemedText>
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'flex-start'
    }
})