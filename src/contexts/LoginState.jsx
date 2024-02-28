import { useState } from "react";
import loginStateContext from "./loginStateContext";

const LoginState = (props) => {
  const [isAuthentic, setAuthentic] = useState(() => {
    if (localStorage.length) {
      console.log("if is true");
      return true;
    } else {
      return false;
    }
  });

  console.log(isAuthentic);

  return (
    <loginStateContext.Provider value={{ isAuthentic, setAuthentic }}>
      {props.children}
    </loginStateContext.Provider>
  );
};

export default LoginState;
