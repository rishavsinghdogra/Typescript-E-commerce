import Navbar from "./Navbar";
import mycontext from "../contexts/Mycontex";
import { useContext } from "react";;


const ProductDetail = () => {

  const {products} = useContext(mycontext);
  console.log(products);

  return (
    <>
     {/* <Navbar /> */}

    {/* <h1>{product[0].title}</h1> */}
    <h1>hello</h1>
    

    </>
  );
};

export default ProductDetail;
