

/*
import React,{ createContext } from "react";
import  * as  Logado  from "../services/Logado";



const Logar = createContext();
export function LogProvider   ({children}) {

    async function entrar(){

        const response = await Logado.Logado;
        console.log(response)

    }
    return(

        <Logar.Provider value={{signed: false, entrar}}>
            {children}
        </Logar.Provider>
    )
 
    }

export default Logar; 

}
*/