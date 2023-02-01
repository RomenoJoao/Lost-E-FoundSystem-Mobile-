import {View , StyleSheet , Text ,TextInput, Button, Image ,  ImageBackground} from 'react-native'




export default function Cadastro(){
    return(
        <View Style={styles.container}>
            
            <View style={styles.loginForm}>
                     <View style={styles.alinha}>   
                        <Image style={styles.Logo} source={require('../imagens/Encontralogoy.png')}></Image>
                        
                        <TextInput style={styles.Tbox2} placeholder="Email instucional"></TextInput>
                        <TextInput  style={styles.Tbox2} placeholder="Palavra-passe"></TextInput>
                        <TextInput  style={styles.Tbox2} placeholder="Palavra-passe"></TextInput>
                        <TextInput  style={styles.Tbox2} placeholder="Palavra-passe"></TextInput>
                        <TextInput  style={styles.Tbox2} placeholder="Palavra-passe"></TextInput>
                         <View style={styles.bot}><Button color='white' title="Entrar"></Button></View>

                        </View>
            </View>
        </View>
    )
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