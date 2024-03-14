import { useContext } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import { ThemeContext, ThemeType } from "../contexts/ThemeContext.tsx";
import { AlldataProducts } from "../contexts/Mycontex.ts";
import mycontext from "../contexts/Mycontex.ts";
import ProductReview from "./ProductReview.tsx";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  let {
    ogProducts,
    setIsCategory
  } = useContext(mycontext) as AlldataProducts;

  const product = ogProducts[id - 1];
  const { nightTheme } = useContext(ThemeContext) as ThemeType;

  useEffect(() => {
    setIsCategory(true);
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`container relative mx-auto mt-8 flex flex-col top-[55px] ${
          nightTheme ? "bg-slate-300" : ""
        }`}
      >
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-md mx-6 h-auto rounded-lg mt-3"
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
          onClick={() => {
            toast.success("🎉 Product on its way!");
          }}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition duration-300"
          >
            BUY NOW
          </button>
          <ProductReview />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
