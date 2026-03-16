import { StyleSheet,Button, Pressable} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedView style={styles.contextMain}>
        <ThemedView style={styles.containerTitle}>
          <ThemedText>Controle de estoque</ThemedText>
          <ThemedText>Moda Intíma</ThemedText>
        </ThemedView>
        <ThemedView style={styles.containerButton}>
          <Pressable style={styles.buttonofcontainer1} onPress={()=>router.push("../screens/sacola-pull")}>
            <ThemedText>Enviar Sacola</ThemedText>
          </Pressable>
          <Pressable style={styles.buttonofcontainer2} onPress={()=>router.push("../screens/sacola-pull")}>
            <ThemedText>Retirar Sacola</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E5B0BD',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap:1,
    
  },
  contextMain:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:360,

  },
  containerTitle:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10
  },
  containerButton:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  buttonofcontainer1:{
    paddingVertical: 20,
    paddingHorizontal:40,
    borderRadius: 15,
    color: "#212121",
    zIndex: 1,
    backgroundColor: "#7C3AED",
    position: "relative",
    fontWeight: "bold",
    fontSize: 17,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.27,
    shadowRadius: 19,
    elevation: 5,
    overflow: "hidden"
  },
   buttonofcontainer2:{
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    color: "#212121",
    zIndex: 1,
    backgroundColor: "#C76A8A",
    position: "relative",
    fontWeight: "bold",
    fontSize: 17,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.27,
    shadowRadius: 19,
    elevation: 5,
    overflow: "hidden"
  },
  texteTitle:{
    fontSize:15,
    fontWeight: "bold",
    color: "#ffff",
  }
});
