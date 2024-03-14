import mycontext from "./Mycontex.ts";
import { useState } from "react";

const AllDataContext = (props) => {
  const [products, setProducts] = useState<any[]>([]);
  const [ogProducts, setOgProducts] = useState<any[]>([]);
  const [clickedProducts, setClickedProducts] = useState<any[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  return (
    <mycontext.Provider
      value={{
        products,
        setProducts,
        ogProducts,
        setOgProducts,
        clickedProducts,
        setClickedProducts,
        sidebarOpen,
        setSidebarOpen,
        isCategory,
        setIsCategory,
      }}
    >
      {props.children}
    </mycontext.Provider>
  );
};

export default AllDataContext;
