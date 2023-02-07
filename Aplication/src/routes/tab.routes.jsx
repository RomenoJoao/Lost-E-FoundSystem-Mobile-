 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


 const {Screen, Navigator}= createBottomTabNavigator();
import { MaterialIcons} from '@expo/vector-icons'
import Home from '../Componentes/Home';
import Achei from '../Componentes/Achei';
import Perdi from '../Componentes/Perdi';
import Configuracao from '../Componentes/Configuracao';
 export function TabRoutes(){
    return (
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: "#ffd747",
          tabBarInactiveTintColor: "gray",
          headerStyle:{
            backgroundColor:'#ffd747'
          }
          
        }}
      >
        <Screen
          name="inicio"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} />
            ),
          }}
          component={Home}
        />

        <Screen
          name="Achei"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="add" color={color} />
            ),
          }}
          component={Achei}
        />
        <Screen
          name="Perdi"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="undo" color={color} />
            ),
          }}
          component={Perdi}
        />
        <Screen
          name="Configuracoes"
          options={{
            headerStyle: {
              backgroundColor: "#ffd747",
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" color={color} />
            ),
          }}
          component={Configuracao}
        />
      </Navigator>
    );
 }