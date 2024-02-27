import axios from "axios";
import loginStateContext from "../contexts/loginStateContext";
import { useContext } from "react";

const useAuthUser = () => {

  const {isAuthentic, setAuthentic} = useContext(loginStateContext);
  const logout = () => {
    localStorage.removeItem("token");
    setAuthentic(false);
  };

  const login = async (URL, details) => {
    try {
      const response = await axios.post(URL, details);
      if (response.status === 200) {
        setAuthentic(true);
        const token = response.data.token;
        console.log("This is our token => ", token);
        localStorage.setItem("token", token);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setAuthentic(false);
      throw error;
    }

    console.log("hook login inside authentic ",isAuthentic);
  };

  console.log("hook login outside authentic ",isAuthentic);
  return { isAuthentic, setAuthentic, login, logout };
};

export default useAuthUser;

