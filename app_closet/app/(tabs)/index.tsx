import { StyleSheet,Button} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedView style={styles.contextMain}>
        <ThemedText>Controle de estoque</ThemedText>
        <Button title="Enviar Sacola" onPress={()=>router.push("../screens/sacola-pull")} />
        <Button title="Retirar Sacola" />
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap:30,
    
  }
  
});
