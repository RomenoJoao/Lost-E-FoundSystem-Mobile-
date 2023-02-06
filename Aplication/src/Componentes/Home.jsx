import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Home() {
  return (
    <View style={css.cont}>
      <ImageBackground
        style={css.fundo}
        source={require("../imagens/menu1.jpg")}
      ></ImageBackground>
      <View style={css.texts}>
        <View style={css.barra}></View>
        <Text style={css.par1}>Alguns </Text>
        <Text style={css.par1}>Itens Perdidos</Text>
      </View>
      
    </View>
  );
}
const css = StyleSheet.create({
  fundo: {
    position: "relative",
    padding:190,
    flex: 1,
    position:'relative',
  },
  cont :{
    justifyContent:'center',
    top:0
    , left:0,
  },
  texts:{
    position:'absolute',
    left: 40,
    flex:1,
  }
  ,
  par1:{
    color:'white',
    fontWeight:'bold',
    fontSize:'40',
    fontWeight:'bold',
  },
  barra:{
    
    position: 'absolute' ,
    width:13,
    height:80,
    backgroundColor:'#FFD747',
    left: -19,
    bottom:11,
    
  }
});