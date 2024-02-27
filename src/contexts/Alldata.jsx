import axios from "axios";
import { useEffect, useState } from "react";
import mycontext from "./Mycontex";

const AllDataContext = (props) => {

  
  
  const [products, setProducts] = useState([]);
  
  const fetchdata = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    setProducts(response.data);
  };
  useEffect(() =>{ fetchdata()}, []);



  return (
    <mycontext.Provider value={{products, setProducts}}>
      {props.children}
    </mycontext.Provider>
  );
};

export default AllDataContext;
