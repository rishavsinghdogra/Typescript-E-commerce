import loginStateContext from "../contexts/loginStateContext.ts";
import { useContext } from "react";

const useAuthUser = () => {
  const { isAuthentic, setAuthentic } = useContext(loginStateContext);

  const logout = () => {
    localStorage.removeItem("token");
    setAuthentic(false);
  };

  const login = (token) => {
    localStorage.setItem("token", token);
    setAuthentic(true);
  };
  return { isAuthentic, setAuthentic, login, logout };
};

export default useAuthUser;
