import { ImageBackground ,View, StyleSheet, Text, Button } from "react-native"

export default function TelaInicio(){
    return(
        <View style={inicioStyle.princ}>
            <ImageBackground style={inicioStyle.img} source={require('../imagens/fundoMovel-1.jpg')}></ImageBackground>
           
            <View  style={inicioStyle.menB}>
                
                <View style={inicioStyle.btao}><Button  title="Iniciar Sessao" color='white'></Button></View>
                <View style={inicioStyle.btao}><Button title="Registar" color='white'></Button></View>  
            </View>

        </View>
    )
}


const inicioStyle=StyleSheet.create(
    {
        btao:{
            width: 254,
            height: 46,
            backgroundColor:'#ffd747',
            borderRadius:12,
            marginBottom: 20,
            
        },
        princ:{
            
            flex:1,
            
        }
        ,img:{
            
            height:1000,
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
        ,menB: {
            width: 414,
            height: 242,
            top:650,
            left:0,
            position:'absolute',
         backgroundColor:'white',
            borderRadius:30,
            alignItems:'center',
            justifyContent:'center'
        },
    }
)