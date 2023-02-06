 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cadastro from '../Componentes/Cadastro';
import Login from '../Componentes/Login';
import TelaInicio from '../Componentes/TelaInicio';


 const {Screen, Navigator}= createBottomTabNavigator();
import { MaterialIcons} from '@expo/vector-icons'

 export function TabRoutes(){
    return(
        <Navigator
        screenOptions={{
            tabBarActiveTintColor:'#ffd474',
            tabBarInactiveTintColor:'gray'
        }}>
            <Screen
            name='inicio'
            options={
                {
                  tabBarIcon: ({color, size})=>(
                    <MaterialIcons
                    name='home'
                    color={color}
                     />
                    
                  )

                    
                }
            }
            component={TelaInicio}/>
            
            <Screen
            name='Cadastro'

            options={{
                headerStyle:{
                    backgroundColor:'#ffd747'
                    
                },
                tabBarIcon: ({color, size})=>(
                    <MaterialIcons
                    name='settings'
                    color={color}
                     />
                    
                  )
            }}
            component={Cadastro}/>

            <Screen
            name='Login'
            options={{
                tabBarIcon: ({color, size})=>(
                    <MaterialIcons
                    name='add'
                    color={color}
                     />
                    
                  )
            }}
            component={Login}/>

           
        </Navigator>
    )
 }