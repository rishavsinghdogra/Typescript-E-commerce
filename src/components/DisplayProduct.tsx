import { useContext, useState } from "react";
import mycontext from "../contexts/Mycontex.ts";
import { Link, useNavigate } from "react-router-dom";
import { apiProducts } from "../services/Products.api";
import useQuery from "../hooks/useQuery.ts";
import CartButton from "../assets/CartButton.tsx";
import { ThemeContext } from "../contexts/ThemeContext.tsx";
import Loader from "../assets/Loader.tsx";
import { AlldataProducts } from "../contexts/Mycontex.ts";
import { ThemeType } from "../contexts/ThemeContext.tsx";
import { AxiosError, AxiosResponse } from "axios";
import Sidebar from "./Sidebar.tsx";

const DisplayProduct = () => {
  let {
    products,
    setProducts,
    setOgProducts,
    clickedProducts,
    setClickedProducts,
    setSidebarOpen,
    isCategory,
  } = useContext(mycontext) as AlldataProducts;

  let { nightTheme } = useContext(ThemeContext) as ThemeType;

  const { loading } = useQuery(apiProducts, {
    onSuccess: (response: AxiosResponse) => {
      if (!isCategory) {
        setProducts(response.data);
      }
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

  return (
    <div
      className={` Proudct tile   text-xs flex flex-wrap justify-center sm:justify-start pb-4 ${
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
            <Link
              to={`/productDetail/${value.id}`}
              className="text-center text-white font-semibold mb-2 "
            >
              <div className="group text-center w-[150px] mb-4">
                <p className="title truncate hover:text-wrap px-2">
                  {value.title.split(" ").length > 5
                    ? value.title.split(" ").slice(0, 4).join(" ") + "..."
                    : value.title}
                </p>
              </div>
            </Link>
            <div
              className="cartButton inline"
              onClick={(e) => {
                e.stopPropagation();
                handleClick(value);
              }}
            >
              <CartButton height={30} />
            </div>
          </div>
        ))
      )}
      <Sidebar />
    </div>
  );
};

export default DisplayProduct;
