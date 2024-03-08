import { useContext, useState } from "react";
import mycontext from "../contexts/Mycontex.ts";
import { Link } from "react-router-dom";
import { apiProducts } from "../services/Products.api";
import useQuery from "../hooks/useQuery.ts";
import CartButton from "../assets/CartButton.tsx";
import { ThemeContext } from "../contexts/ThemeContext.tsx";
import Loader from "../assets/Loader.tsx";

const DisplayProduct = () => {
  const { products, setProducts } = useContext(mycontext);

  let { nightTheme } = useContext(ThemeContext);
  console.log(nightTheme);

  const [clickedProducts, setClickedProducts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { loading, setLoading } = useQuery(apiProducts, {
    onSuccess: (response) => {
      setProducts(response.data);
      setLoading(false);
    },
    onError(error) {
      console.log(error);
    },
  });

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
    <div
      className={`relative top-[75px] text-xs flex flex-wrap justify-center sm:justify-start ${
        nightTheme ? "night-theme" : ""
      }`}
    >
      {/* Conditionally render loader or products */}
      {loading ? (
        <Loader />
      ) : (
        // Products
        products.map((value, index) => (
          <div
            key={index}
            className={`product hover:scale-125 flex flex-col items-center shadow-lg rounded-md w-[150px] h-[200px] justify-center mr-4 mb-4 sm:mr-0 sm:mb-0 sm:ml-4 sm:mt-4 hover:duration-300 bg-gradient-to-br ${
              nightTheme
                ? "from-blue-600 to-blue-800"
                : "from-blue-200 to-blue-400"
            }`}
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
                className="text-center text-white font-semibold mb-2 "
              >
                <p className="title truncate  hover:overflow-visible hover:text-wrap px-2">
                  {value.title}
                </p>
              </Link>
            </div>
            <CartButton />
          </div>
        ))
      )}

      {/* Sidebar */}
      <div
        className={`sidebar fixed h-screen w-[250px] z-20 right-0 top-[65px] overflow-y-auto transform transition-transform ${
          sidebarOpen ? "translate-x-0 backdrop-blur-lg" : "translate-x-full"
        } `}
      >
        <div
          className={`flex justify-between items-center p-4 ${
            nightTheme ? "bg-gray-800" : "bg-[#E69A8D] text-white"
          }`}
        >
          <h2
            className={`font-semibold ${
              nightTheme ? "text-gray-200" : "text-white"
            } `}
          >
            Cart
          </h2>
          <button onClick={closeSidebar} className="text-white">
            Close
          </button>
        </div>
        {/* Render all clicked products in the sidebar */}
        {clickedProducts.map((product, index) => (
          <div
            key={index}
            className={`flex items-center py-2 px-4 rounded-lg shadow-md mb-4 hover:bg-fuchsia-800 transition-colors duration-300 ${
              nightTheme ? "bg-gray-700" : "bg-fuchsia-700"
            }`}
          >
            <img
              className="w-12 h-12 object-cover rounded-full mr-2"
              src={product.image}
              alt={product.title}
            />
            <div>
              <h2
                className={`${
                  nightTheme ? "text-gray-200" : "text-white"
                } font-semibold`}
              >
                {product.title}
              </h2>
              <p
                className={`${nightTheme ? "text-gray-300" : "text-gray-200"}`}
              >
                {product.price}
              </p>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className={`ml-auto inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300`}
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
