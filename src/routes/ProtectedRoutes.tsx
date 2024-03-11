import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import loginStateContext from "../contexts/loginStateContext.ts";
import { LoginStateValues } from "../contexts/loginStateContext.ts";

const Protectedroute = () => {
  const { isAuthentic, setAuthentic } = useContext(loginStateContext) as LoginStateValues;
  return <>{isAuthentic ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default Protectedroute;
