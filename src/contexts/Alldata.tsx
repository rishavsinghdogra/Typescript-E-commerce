import mycontext from "./Mycontex.ts";
import { useState } from "react";

const AllDataContext = (props) => {
  const [products, setProducts] = useState<any[]>([]);

  return (
    <mycontext.Provider value={{ products, setProducts }}>
      {props.children}
    </mycontext.Provider>
  );
};

export default AllDataContext;
