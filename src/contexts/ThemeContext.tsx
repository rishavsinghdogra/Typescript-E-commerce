import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {

    let [nightTheme, setNightTheme] = useState(false);

    return ( 
        <ThemeContext.Provider value = {{nightTheme, setNightTheme}}> 
        {props.children}
        </ ThemeContext.Provider >
     );
}
 
export default ThemeProvider;



