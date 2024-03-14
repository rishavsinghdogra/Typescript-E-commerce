import { SetStateAction, createContext } from "react";

export type AlldataProducts = {
  products: any[];
  setProducts: React.Dispatch<SetStateAction<any[]>>;
  ogProducts: any[];
  setOgProducts: React.Dispatch<SetStateAction<any[]>>;
  clickedProducts: any[];
  setClickedProducts: React.Dispatch<SetStateAction<any[]>>;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
  isCategory: boolean;
  setIsCategory: React.Dispatch<SetStateAction<boolean>>;
};

export type AlldataContextType = any[] | AlldataProducts;

const mycontext = createContext<AlldataContextType>([]);

export default mycontext;
