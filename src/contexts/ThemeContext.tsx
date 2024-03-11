import { SetStateAction, createContext, useState } from "react";

export type ThemeType = {
    nightTheme: boolean;
    setNightTheme: React.Dispatch<SetStateAction<boolean>>;
}

export type ThemeContextType = boolean | ThemeType;

export const ThemeContext = createContext<ThemeContextType>(false);

const ThemeProvider = (props) => {

    let [nightTheme, setNightTheme] = useState(false);

    return ( 
        <ThemeContext.Provider value = {{nightTheme, setNightTheme}}> 
        {props.children}
        </ ThemeContext.Provider >
     );
}
 
export default ThemeProvider;



