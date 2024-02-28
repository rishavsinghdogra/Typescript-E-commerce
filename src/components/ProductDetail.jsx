import mycontext from "../contexts/Mycontex";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { products } = useContext(mycontext);
  const { id } = useParams();
  const product = products[id - 1];

  return (
    <div className="container mx-auto mt-8 flex flex-col">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-md rounded-lg shadow-xl" 
        />
      </div>
      <div className="ml-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1> 
        <p className="text-lg text-gray-700 mb-4">{product.description}</p> 
        <div className="flex items-center mb-4">
          <span className="text-xl font-semibold text-gray-900 mr-2">${product.price}</span> 
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">&#9733;</span>
            <span className="text-yellow-500 mr-1">&#9733;</span>
            <span className="text-yellow-500 mr-1">&#9733;</span>
            <span className="text-yellow-500 mr-1">&#9733;</span>
            <span className="text-gray-400">({product.rating.count})</span>
          </div>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition duration-300"> {/* Applied gradient background */}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
