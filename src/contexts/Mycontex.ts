import { SetStateAction, createContext } from "react";

export type AlldataProducts = {
  products: any[];
  setProducts: React.Dispatch<SetStateAction<any[]>>;
};

export type AlldataContextType = any[] | AlldataProducts;

const mycontext = createContext<AlldataContextType>([]);

export default mycontext;
