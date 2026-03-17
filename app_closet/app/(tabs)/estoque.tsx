import { ThemedText } from "@/components/themed-text";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/themed-view";

export default function EstoqueScreen(){
  return(
    <ThemedView>
        <ThemedView>
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
        justifyContent: 'center',
    }
})