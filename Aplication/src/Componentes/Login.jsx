
import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
export default function Login(){

    async function loga() {}

    return (
      <View style={loginStyle.container}>
        <ImageBackground
          style={loginStyle.img}
          source={require("../imagens/fundoMovel-1.jpg")}
        ></ImageBackground>

        <View style={loginStyle.loginForm}>
          <Image
            style={loginStyle.Logo}
            source={require("../imagens/Encontralogoy.png")}
          ></Image>
          <TextInput
            style={loginStyle.Tbox1}
            placeholder="Email instucional"
          ></TextInput>
          <TextInput
            style={loginStyle.Tbox2}
            placeholder="Palavra-passe"
          ></TextInput>
          <View style={loginStyle.bot}>
            <Button color="white" title="Entrar" onPress={loga}></Button>
          </View>
        </View>
      </View>
    );
}


const loginStyle = StyleSheet.create({
  img: {
    position: "relative",
    height: 1000,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bot: {
    backgroundColor: "#ffd747",
    width: 224,
    height: 41,
    borderRadius: 6,
    bottom: 40,
  },

  Tbox1: {
    textAlign: "center",
    backgroundColor: "#fff",
    width: 224,
    height: 41,
    borderRadius: 6,
    bottom: 80,
  },
  Tbox2: {
    backgroundColor: "#fff",
    width: 224,
    height: 41,
    borderRadius: 6,
    bottom: 60,
  },
  Logo: {
    width: 190,
    height: 190,
    bottom: 30,
  },
  loginForm: {
    width: 279,
    height: 320,
    backgroundColor: "#f3f3f3",
    borderRadius: 17,
    left: 64,
    top: 290,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
  },
});

