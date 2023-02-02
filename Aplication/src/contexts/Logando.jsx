import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [utilizador, setUtilizador] = useState(undefined);

  async function criarConta() {
    // Implementar corpo. Pode alterar tudo que está aqui

    // ...

    // exemplo pode
    setUtilizador({ email: "example@email.com" });
  }

  async function iniciarSessao() {
    // Implementar corpo. Pode alterar tudo que está aqui
    setUtilizador({ email: "example@email.com" });
  }

  function finalizarSessao() {
    // É só limpar o utilizador
    setUtilizador(undefined);
  }

  const contextValue = {
    criarConta,
    iniciarSessao,
    finalizarSessao,
    utilizador,
    // Serve para saber se o utilizador está autenticado ou não
    utilizadorAutenticado: !!utilizador,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
