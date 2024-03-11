import mycontext from "../contexts/Mycontex.ts";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import { toast } from "react-toastify";
import ProductReview from "./ProductReview.tsx";
import { ThemeContext } from "../contexts/ThemeContext.tsx";
import { AlldataProducts } from "../contexts/Mycontex.ts";
import { ThemeType } from "../contexts/ThemeContext.tsx";

const ProductDetail = () => {
  const { products } = useContext(mycontext) as AlldataProducts;
  const { id } = useParams();
  const product = products[id - 1];
  let {nightTheme} = useContext(ThemeContext) as ThemeType;

  return (
    <>
      <Navbar />
      <div className={`container relative mx-auto mt-8 flex flex-col top-[55px] ${nightTheme ? "bg-slate-300" : "" } `} >
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-md rounded-lg mt-3"
          />
        </div>
        <div className="ml-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold text-gray-900 mr-2">
              ${product.price}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span className="text-gray-400">({product.rating.count})</span>
            </div>
          </div>
          <button
            onClick={ () => {toast.success("Product added to cart!")}}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          >
            Add to Cart
          </button>

          <ProductReview />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
