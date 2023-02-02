import { useContext } from "react";
import AuthContext from "../contexts/Logando";
import AuthRoute from "./auth.routes";
import { StackRoutes } from "./stack.routes";
export function Routes() {
  const { utilizadorAutenticado } = useContext(AuthContext);

  if (!utilizadorAutenticado) return <AuthRoute />;

  return <StackRoutes />;
}
