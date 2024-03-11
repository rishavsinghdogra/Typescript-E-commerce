import { useState } from "react";
import loginStateContext from "./loginStateContext.ts";


const LoginState = (props) => {
  const [isAuthentic, setAuthentic] = useState(() => {
    if (localStorage.length) {
      return true;
    } else {
      return false;
    }
  });


  return (
    <loginStateContext.Provider value={{isAuthentic, setAuthentic}}>
      {props.children}
    </loginStateContext.Provider>
  );
};

export default LoginState;
