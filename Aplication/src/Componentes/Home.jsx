import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import AuthContext from "../contexts/Logando";

const Home = () => {
  const { utilizador, finalizarSessao } = useContext(AuthContext);

  return (
    <View>
      <Text>{utilizador.email}</Text>
      <Button onPress={finalizarSessao} title="Finalizar Sessão" />
    </View>
  );
};

export default Home;
