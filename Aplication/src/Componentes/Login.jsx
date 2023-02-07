
import { View , StyleSheet , Text ,TextInput, Button, Image ,  ImageBackground } from "react-native";
import { useState } from "react";
import { api } from "../api/api";
export default function Login({navigation}){

    function openScreen2() {
      navigation.navigate("Home");
    }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   async function verify({email,password}){
      await  api.login({email,password})
    }

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
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            secureTextEntry
            onChangeText={setPassword}
            style={loginStyle.Tbox2}
            placeholder="Palavra-passe"
          ></TextInput>
          <View style={loginStyle.bot}>
            <Button
              color="white"
              onPress={()=> {
                const response = verify({email,password})
                console.log(response)
               openScreen2()
                }}

              title="Entrar"
            ></Button>
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
    textAlign: "center",
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

