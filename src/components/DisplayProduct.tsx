import { useContext, useState } from "react";
import mycontext from "../contexts/Mycontex.ts";
import { Link } from "react-router-dom";
import { apiProducts } from "../services/Products.api";
import useQuery from "../hooks/useQuery.ts";
import CartButton from "../assets/CartButton.tsx";
import { ThemeContext } from "../contexts/ThemeContext.tsx";
import Loader from "../assets/Loader.tsx";
import { AlldataProducts } from "../contexts/Mycontex.ts";
import { ThemeType } from "../contexts/ThemeContext.tsx";
import { AxiosError, AxiosResponse } from "axios";

const DisplayProduct = () => {
  const {
    products,
    setProducts,
    setOgProducts,
    clickedProducts,
    setClickedProducts,
    sidebarOpen,
    setSidebarOpen,
  } = useContext(mycontext) as AlldataProducts;

  let { nightTheme } = useContext(ThemeContext) as ThemeType;

  const { loading, setLoading } = useQuery(apiProducts, {
    onSuccess: (response: AxiosResponse) => {
      setProducts(response.data);
      setOgProducts(response.data);
    },
    onError(error: AxiosError) {
      console.log(error);
    },
  });

  const handleClick = (product: Record<string, any>) => {
    const index = clickedProducts.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      const updatedProducts = [...clickedProducts];
      updatedProducts[index].count += 1;
      setClickedProducts(updatedProducts);
    } else {
      setClickedProducts([...clickedProducts, { ...product, count: 1 }]);
      setSidebarOpen(true); // Open the sidebar when a product is added
    }
  };

  const handleDelete = (index: number) => {
    const updatedProducts = [...clickedProducts];
    updatedProducts.splice(index, 1);
    setClickedProducts(updatedProducts);
  };

  const handlePlus = (index: number) => {
    const updatedProducts = [...clickedProducts];
    updatedProducts[index].count += 1;
    setClickedProducts(updatedProducts);
  };

  const handleMinus = (index: number) => {
    const updatedProducts = [...clickedProducts];
    updatedProducts[index].count -= 1;
    if (updatedProducts[index].count === 0) {
      updatedProducts.splice(index, 1);
    }
    setClickedProducts(updatedProducts);
  };

  const closeSidebar = () => {
    setSidebarOpen(false); // Close the sidebar
  };

  return (
    <div
      className={` text-xs flex flex-wrap justify-center sm:justify-start pb-4 ${
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
          >
            <img
              className="w-[100px] h-[100px] object-cover mb-2 rounded-full"
              src={value.image}
              alt={value.title}
            />
            <div className="group text-center w-[150px] mb-4">
              <Link
                to={`/productDetail/${value.id}`}
                className="text-center text-white font-semibold mb-2 "
              >
                <p className="title truncate hover:text-wrap px-2">
                  {value.title.split(" ").length > 5
                    ? value.title.split(" ").slice(0, 4).join(" ") + "..."
                    : value.title}
                </p>
              </Link>
            </div>
            <div
              className="cartButton inline"
              onClick={(e) => {
                e.stopPropagation();
                handleClick(value);
              }}
            >
              <CartButton />
            </div>
          </div>
        ))
      )}

      {/* Sidebar */}
      <div
        className={`sidebar fixed h-screen w-[250px] z-40 right-0 top-[65px] overflow-y-auto transform transition-transform ${
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
          <div className="CartCount bg-yellow-400 p-1 font-bold rounded-md shadow-inner text-gray-600">
            Total Products {clickedProducts.length}
          </div>
          <button onClick={closeSidebar} className="text-white">
            Close
          </button>
        </div>
        {/* Render all clicked products in the sidebar */}
        {clickedProducts.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col items-center py-2 px-4 rounded-lg shadow-md mb-4 hover:bg-fuchsia-800 transition-colors duration-300 ${
              nightTheme ? "bg-gray-700" : "bg-fuchsia-700"
            }`}
          >
            <div className="flex items-center">
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
                  className={`${
                    nightTheme ? "text-gray-300" : "text-gray-200"
                  }`}
                >
                  {`$ ${product.price}`}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2 ">
              <button
                onClick={() => handleMinus(index)}
                className={`inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 transition-colors duration-300`}
              >
                -
              </button>
              <span className="px-2">{product.count}</span>
              <button
                onClick={() => handlePlus(index)}
                className={`inline-flex items-center mr-1 px-2 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 transition-colors duration-300`}
              >
                +
              </button>
              <button
                onClick={() => handleDelete(index)}
                className={`ml-auto inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 transition-colors duration-300`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProduct;
