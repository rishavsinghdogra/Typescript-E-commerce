import { SetStateAction, createContext } from "react";

export type LoginStateValues = {
  isAuthentic: boolean;
  setAuthentic: React.Dispatch<SetStateAction<boolean>>;
};
export type LoginStateContextType = boolean | LoginStateValues;

const loginStateContext = createContext<LoginStateContextType>(false);

export default loginStateContext;
