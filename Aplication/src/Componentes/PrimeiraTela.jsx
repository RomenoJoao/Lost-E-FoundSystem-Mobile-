import { View, StyleSheet, Image } from "react-native";



export default function PrimeiraTela({navigation}){
      function openScreen(){
        navigation.navigate('inicio')
    }
   
    return(
        <View style={Estilo.fundo} onTouchStart={openScreen}>
            <Image style={Estilo.contCenter}  source={require('../imagens/Encontralogo.png')}></Image>
        </View>
    )
}

const Estilo= StyleSheet.create({

    fundo: {
        backgroundColor: '#FFD747' ,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        width:'100%'
    },
    contCenter: {
        width: 317,
        height:317,
    }
})