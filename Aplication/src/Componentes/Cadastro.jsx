import {View , StyleSheet , Text ,TextInput, Button, Image ,  ImageBackground} from 'react-native'
import FormCadastro from './FormCadastro'


export default function Cadastro({navigation}){
    return(
        <View Style={styles.container}>
                 <ImageBackground style={styles.img} source={require('../imagens/fundoMovel-1.jpg')}></ImageBackground>
            <View style={styles.formPosition}>
                <FormCadastro navigation={navigation}></FormCadastro>
            </View>
        </View>
    )
}

const styles=StyleSheet.create(
    {
            img:{
            height:1000,
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
            formPosition:{
                justifyContent:'center',
                alignItems:'center',
                top:200
            }
        }
);