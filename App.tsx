import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Home />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingTop: 32,
    paddingHorizontal: 24,
    fontFamily: 'sans-serif',
  },
});
