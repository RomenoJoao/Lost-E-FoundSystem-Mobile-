 import React from 'react';
 import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Cadastro from '../Componentes/Cadastro';
import Login from '../Componentes/Login';
import TelaInicio from '../Componentes/TelaInicio';
import PrimeiraTela from '../Componentes/PrimeiraTela';
import { TabRoutes } from './tab.routes';

 const {Screen, Navigator}= createNativeStackNavigator();

 export function StackRoutes(){
    return(

        <Navigator
        screenOptions={{
            headerShown:false,
        }}>

            <Screen
            name='first'
            options={{
                headerShown:false,
                animation: 'flip',
                
                
            }}
            component={PrimeiraTela}/>


            <Screen
            name='inicio'
            options={
                {
                    headerShown:false
                    
                }
            }
            component={TelaInicio}/>
            
            <Screen
            name='Cadastro'

            options={{
                headerStyle:{
                    backgroundColor:'#ffd747'
                }
            }}
            component={Cadastro}/>
            
            <Screen
            name='Home'

            options={{
                headerStyle:{
                    backgroundColor:'#ffd747'
                }
            }}
            component={TabRoutes}/>

            <Screen
            name='Login'
            component={Login}/>

           
        </Navigator>
    )
 }