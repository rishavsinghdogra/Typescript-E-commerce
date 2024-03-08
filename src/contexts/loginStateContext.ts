import { SetStateAction, createContext } from "react";

export type obj = {
    isAuthentic : boolean
    setAuthentic: React.Dispatch<SetStateAction<boolean>>
}
export type LoginStateContextType = boolean | obj;

const loginStateContext = createContext<LoginStateContextType>(false);

export default loginStateContext;