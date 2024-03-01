import { useContext, useState } from "react";
import mycontext from "../contexts/Mycontex";
import { Link } from "react-router-dom";

const DisplayProduct = () => {
  const obj = useContext(mycontext);
  const { products } = obj;

  const [clickedProducts, setClickedProducts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleClick = (product) => {
    setClickedProducts([...clickedProducts, product]);
    setSidebarOpen(true); // Open the sidebar when a product is added
  };

  const handleDelete = (index) => {
    const updatedProducts = [...clickedProducts];
    updatedProducts.splice(index, 1);
    setClickedProducts(updatedProducts);
  };

  const closeSidebar = () => {
    setSidebarOpen(false); // Close the sidebar
  };

  return (
    <div className="relative top-[75px] text-xs flex flex-wrap justify-center sm:justify-start">
      {/* Products */}
      {products.map((value, index) => (
        <div
          key={index}
          className="product hover:scale-125 flex flex-col items-center bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg rounded-md w-[150px] h-[200px] justify-center mr-4 mb-4 sm:mr-0 sm:mb-0 sm:ml-4 sm:mt-4 hover:duration-300"
          onClick={(e) => {
            e.stopPropagation();
            handleClick(value);
          }}
        >
          <img
            className="w-[100px] h-[100px] object-cover mb-2 rounded-full"
            src={value.image}
            alt={value.title}
          />
          <div className="group text-center  truncat w-[150px]  mb-4">
            <Link
              to={`/productDetail/${value.id}`}
              className="text-center text-white font-semibold mb-2 px-2"
            >
                  <p className="title truncate  hover:overflow-visible hover:text-wrap">{value.title}</p>
            </Link>
          </div>
          <button className="bg-[#F9A03F] text-white py-1 px-4 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-300">
            Add to cart
          </button>
        </div>
      ))}

      {/* Sidebar */}
      <div
        className={`sidebar fixed bg-[rgba(242, 209, 201, 0.1)] backdrop-blur-lg h-screen w-[250px] z-20 right-0 top-[65px] overflow-y-auto transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center bg-[#E69A8D] p-4">
          <h2 className="text-white font-semibold">Shopping Cart</h2>
          <button onClick={closeSidebar} className="text-white">
            Close
          </button>
        </div>
        {/* Render all clicked products in the sidebar */}
        {clickedProducts.map((product, index) => (
          <div
            key={index}
            className="bg-fuchsia-700 flex items-center py-2 px-4 rounded-lg shadow-md mb-4 hover:bg-fuchsia-800 transition-colors duration-300"
          >
            <img
              className="w-12 h-12 object-cover rounded-full mr-2"
              src={product.image}
              alt={product.title}
            />
            <div>
              <h2 className="text-white font-semibold">{product.title}</h2>
              <p className="text-gray-200">{product.price}</p>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProduct;
