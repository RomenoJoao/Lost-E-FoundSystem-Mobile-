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

      

      <View style={css.estatiscs}>
        <View style={css.geral}>
          <Text style={css.textb}>Dados Estatisticos</Text>
        </View>

        <View style={css.dad}>
          <View style={css.lost}></View>
          <View style={css.lost}></View>
          <View style={css.lost}></View>
        </View>
      </View>
    </View>
  );
}
const css = StyleSheet.create({
  fundo: {
    position: "relative",
    padding: 190,
    flex: 1,
    position: "relative",
  },
  cont: {
    justifyContent: "center",
    top: 0,
    left: 0,
    backgroundColor: "#f3f3f3",
  },
  texts: {
    position: "absolute",
    left: 40,
    flex: 1,
  },
  par1: {
    color: "white",
    fontSize: "40",
    fontWeight: "bold",
  },
  barra: {
    position: "absolute",
    width: 13,
    height: 80,
    backgroundColor: "#FFD747",
    left: -19,
    bottom: 11,
  },
  estatiscs: {
    top: 90,
    left: 32,
  },
  textb: {
    color: "#000000",
    fontSize: "18",
    fontWeight: "bold",
  },
  geral: {
    width: 352,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius:7,
  },
  dad:{
    flex:1,
    display: 'flex',
    alignContent:'space-between',
    flexDirection:'row',
    top:12,
  },
  lost: {
    width: 110,
    height:100,
    backgroundColor:'white',
    marginRight:12,
    borderRadius:7,

  },
});