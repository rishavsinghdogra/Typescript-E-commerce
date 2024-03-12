import loginStateContext from "../contexts/loginStateContext.ts";
import { useContext } from "react";
import { LoginStateValues } from "../contexts/loginStateContext.ts";

const useAuthUser = () => {
  const { isAuthentic, setAuthentic } = useContext(
    loginStateContext
  ) as LoginStateValues;

  const logout = () => {
    localStorage.removeItem("token");
    setAuthentic(false);
  };

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setAuthentic(true);
  };
  return { isAuthentic, setAuthentic, login, logout };
};

export default useAuthUser;
