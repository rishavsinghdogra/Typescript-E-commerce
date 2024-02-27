import { useState } from "react";
import loginStateContext from "./loginStateContext";


const LoginState = (props) => {

    const [isAuthentic, setAuthentic] = useState(false);

    return ( 

        <loginStateContext.Provider value={{isAuthentic , setAuthentic}}>
            {props.children}
        </loginStateContext.Provider>

     );
}
 
export default LoginState;