
import { View , StyleSheet , Text ,TextInput, Button, Image ,  ImageBackground } from "react-native";
import React,{ useContext } from "react";
<<<<<<< HEAD
import teste from "./Teste"
export default function Login({navigation}){
  function openScreen(){
    navigation.navigate('Teste')
}
=======
export default function Login(){

    function openScreen2() {
      navigation.navigate("Cadastro");
    }
>>>>>>> db578c2bd7fd2093af042f4ab55c2a3b6715b328

   
    return(


        <View style={loginStyle.container} >
            <ImageBackground style={loginStyle.img} source={require('../imagens/fundoMovel-1.jpg')}></ImageBackground>
            
            <View style={loginStyle.loginForm}>

                    <Image style={loginStyle.Logo} source={require('../imagens/Encontralogoy.png')}></Image>
                    <TextInput style={loginStyle.Tbox1} placeholder="Email instucional"></TextInput>
                    <TextInput  style={loginStyle.Tbox2} placeholder="Palavra-passe"></TextInput>
<<<<<<< HEAD
                    <View style={loginStyle.bot}><Button color='white' title="Entrar" onPress={openScreen}></Button></View>
=======
                    <View style={loginStyle.bot} ><Button color='white' onPress={openScreen2()} title="Entrar" ></Button></View>
>>>>>>> db578c2bd7fd2093af042f4ab55c2a3b6715b328
            </View>

        </View>
    )
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

