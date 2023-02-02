import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Componentes/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
