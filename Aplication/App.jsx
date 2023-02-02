//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { AuthProvider } from "./src/contexts/Logando";
import { Routes } from "./src/routes";

//import PrimeiraTela from './Componentes/PrimeiraTela';
//import TelaInicio from './Componentes/TelaInicio';
//import Cadastro from './Componentes/Cadastro';
//import Login from './Componentes/Login';
//import { Routes } from './routes';
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
