import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Configuracao extends Component {
  render() {
    return (
      <View style={css.cont}>
        <View style={css.estatiscs}>
            <View style={css.geral}>
                <Text style={css.textb}>Ver Perfil</Text>
            </View>
            <View style={css.geral}>
                <Text style={css.textb}>Alterar Senha</Text>
            </View>
            <View style={css.geral1}>
                <Text style={css.textb2 }>Sair</Text>
            </View>
        </View>
      </View>
    )
  }
}



const css = StyleSheet.create({
  cont: {
    alignItems: "center",
    top: 50,
    backgroundColor: "#f3f3f3",
  },
  estatiscs: {
    flex: 1,
    justifyContent: "space-between",
  },
  textb: {
    color: "#000000",
    fontSize: "12",
    fontWeight: "ligth",
  },
  textb2: {
    color: "white",
    fontSize: "12",
    fontWeight: "ligth",

  },
  geral: {
    width: 352,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 7,
    marginBottom: 15,
  },
  geral1: {
    width: 352,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 7,
    marginBottom: 15,
    backgroundColor:'#ffd747',
  },
  lost: {
    width: 110,
    height: 100,
    backgroundColor: "white",
    marginRight: 12,
    borderRadius: 7,
  },
});