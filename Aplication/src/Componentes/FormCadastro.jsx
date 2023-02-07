import {View , StyleSheet , Text ,TextInput, Button, Image ,  ImageBackground} from 'react-native'
import { useState } from 'react';
import { api } from '../api/api';

export default function Cadastro({navigation}){



   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password1, setPassword1] = useState("");
   const [password, setPassword] = useState("");


  
    function submitE({name,email,phone,password}){
        api.createUser({name,email,phone,password})
    }
    function openScreen(){
        
      navigation.navigate("Home");
    }


    return (
      <View Style={styles.container}>
        <View style={styles.loginForm}>
          <View style={styles.alinha}>
            <Image
              style={styles.Logo}
              source={require("../imagens/Encontralogoy.png")}
            ></Image>

            <TextInput
              style={styles.Tbox2}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            ></TextInput>
            <TextInput
              style={styles.Tbox2}
              placeholder="email Institucional"
              value={email}
              onChangeText={setEmail}
            ></TextInput>
            <TextInput
              style={styles.Tbox2}
              placeholder="Telefone"
              value={phone}
              onChangeText={setPhone}
            ></TextInput>
            <TextInput
              style={styles.Tbox2}
              placeholder="Palavra-passe"
              type="password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            ></TextInput>
            <TextInput
              style={styles.Tbox2}
              placeholder="Palavra-passe"
              secureTextEntry
              type="password1"
              value={password1}
              onChangeText={ setPassword1}
            ></TextInput>
            <View style={styles.bot}>
              <Button
                onPress={() => {

                    if (password !== password1) alert("Password Não coincidem");
                     else{
                        submitE({ name, email, phone, password });
                        alert('Bem-vindo')
                        openScreen();
                    }
                }}
                color="white"
                title="Entrar"
              ></Button>
            </View>
          </View>
        </View>
      </View>
    );
}

const styles=StyleSheet.create(
    {
        alinha:{
                
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                alignItems:'center',
                bottom:20,
        },
          bot:{
            backgroundColor:'#ffd747',
            width:224,
            height:41,
            borderRadius:6,
            bottom: 40,
        },
        
        Tbox2:{
            backgroundColor:'#fff',
            width:224,
            height:34,
            borderRadius:6,
            bottom:35,
            marginBottom:19,
            
        },
        Logo:{
                width:190,
                height:190,
                top:10
        }
        ,
            loginForm:{
                    width:279,
                    height:460,
                    backgroundColor:'#f3f3f3',
                    borderRadius:17,
                    alignItems:'center',
                    justifyContent:'center',

            },
            container:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
            }

        }
);