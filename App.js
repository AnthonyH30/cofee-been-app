import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.greenText}><Text style={styles.text}>Coffee</Text> Been</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenText:{
    color: "green",
    fontSize: 30,
    fontWeight: "700",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
  }
});
