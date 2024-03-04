import mycontext from "./Mycontex";
import { useState } from "react";

const AllDataContext = (props) => {

  const [products, setProducts] = useState([]);

  return (
    <mycontext.Provider value={{products, setProducts}}>
      {props.children}
    </mycontext.Provider>
  );
};

export default AllDataContext;
