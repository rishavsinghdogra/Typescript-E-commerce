import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import loginStateContext from "../contexts/loginStateContext";

const Protectedroute = () => {
  const { isAuthentic } = useContext(loginStateContext);
  return <>{isAuthentic ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default Protectedroute;
