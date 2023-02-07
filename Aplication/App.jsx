//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';
//import Logar from './src/contexts/Logando';
import { NavigationContainer } from '@react-navigation/native';
//import Home from './src/Componentes/Home'

//import PrimeiraTela from './Componentes/PrimeiraTela';
//import TelaInicio from './Componentes/TelaInicio';
//import Cadastro from './Componentes/Cadastro';
//import Login from './Componentes/Login';
//import { Routes } from './routes';
export default function App() {
  
  return (
   <NavigationContainer>
          <Routes/>
  </NavigationContainer>
     /* <View style={styles.container}>
          <Home/>
      </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
