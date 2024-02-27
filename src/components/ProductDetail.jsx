// import { useState } from "react";
// import { useContext } from "react";
// import mycontext from "../contexts/Mycontex";
import Navbar from "./Navbar";
import mycontext from "../contexts/Mycontex";
import { useContext } from "react";
import AllDataContext from "../contexts/Alldata";


const ProductDetail = () => {

  const {product} = useContext(mycontext);
  console.log(product);

  return (
    <>
     {/* <Navbar /> */}

    {/* <h1>{product[0].title}</h1> */}
    <h1>yoooooooooooooooooooo</h1>
    

    </>
  );
};

export default ProductDetail;
