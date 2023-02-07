import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';

export default class Achei extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={css.cont}>
        <View style={css.estatiscs}>
          <TextInput style={css.geral} placeholder="O que achou?"></TextInput>
        </View>
        <View style={css.estatiscs}>
          <TextInput style={css.geral} placeholder="Onde achou?"></TextInput>
        </View>
        <View style={css.estatiscs}>
          <TextInput
            style={css.geral}
            placeholder="Contacto Preferencial"
          ></TextInput>
        </View>
        <View style={css.estatiscs}>
          <TextInput style={css.geral} placeholder="Categoria"></TextInput>
        </View>
        <View style={css.geral1}>
          <Button
            color="white"
            onPress={() => {
            }}
            title="Publicar"
          ></Button>
        </View>
      </View>
    );
  }
}

const css = StyleSheet.create({
  cont: {
    alignItems: "center",
    top: 50,
    backgroundColor: "#f3f3f3",
  },
  estatiscs: {
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
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 7,
    marginBottom: 15,
  },
  geral1: {
    width: 352,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 7,
    marginBottom: 15,
    backgroundColor: "#ffd747",
  },
  lost: {
    width: 110,
    height: 100,
    backgroundColor: "white",
    marginRight: 12,
    borderRadius: 7,
  },
});