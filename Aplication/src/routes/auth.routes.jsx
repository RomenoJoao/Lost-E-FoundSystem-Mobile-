import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cadastro from "../Componentes/Cadastro";
import Login from "../Componentes/Login";
import PrimeiraTela from "../Componentes/PrimeiraTela";
import TelaInicio from "../Componentes/TelaInicio";

const Stack = createNativeStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator initialRouteName="first">
      <Stack.Screen
        name="first"
        options={{
          headerShown: false,
          animation: "flip",
        }}
        component={PrimeiraTela}
      />

      <Stack.Screen
        name="inicio"
        options={{
          headerShown: false,
        }}
        component={TelaInicio}
      />
      <Stack.Screen
        name="Cadastro"
        options={{
          headerStyle: {
            backgroundColor: "#ffd747",
          },
        }}
        component={Cadastro}
      />

      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthRoute;
