import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import PrimeiraTela from './Componentes/PrimeiraTela';
//import TelaInicio from './Componentes/TelaInicio';
import Login from './Componentes/Login';


export default function App() {
  return (
    <View >
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
