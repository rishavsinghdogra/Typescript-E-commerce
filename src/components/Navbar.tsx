import { useContext, useState } from "react";
import mycontext from "../contexts/Mycontex.ts";
import axios from "axios";
import useAuthUser from "../hooks/useAuth.ts";
import { ThemeSwitch } from "../assets/ThemeSwitch.ts";
import { ThemeContext } from "../contexts/ThemeContext.tsx";
import { AlldataProducts } from "../contexts/Mycontex.ts";
import { ThemeType } from "../contexts/ThemeContext.tsx";
import { useNavigate } from "react-router-dom";
import { apiJewelery } from "../services/Products.api.ts";
import { AxiosResponse, AxiosError } from "axios";
import useQuery from "../hooks/useQuery.ts";

export const Navbar = () => {
  let { nightTheme, setNightTheme } = useContext(ThemeContext) as ThemeType;
  let { products, setProducts, ogProducts } = useContext(
    mycontext
  ) as AlldataProducts;

  const [search, setSearch] = useState("");
  const { logout } = useAuthUser();

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchedProduct = products.filter((value) =>
        value.title.toLowerCase().includes(search.toLowerCase())
      );

      setProducts(searchedProduct);
    }
  };

  const handleClick = async (str: string) => {
    if (str === "men's clothing") {
      products = ogProducts;
      const mensClothing = products.filter(
        (value) => value.category === "men's clothing"
      );
      setProducts(mensClothing);
    } else if (str === "jewelery") {
      products = ogProducts;
      const jewelery = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
     
      setProducts(jewelery.data);
    } else if (str === "electronics") {
      products = ogProducts;
      const electronics = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      setProducts(electronics.data);
    } else if (str === "women's clothing") {
      products = ogProducts;
      const womensclothing = products.filter(
        (value) => value.category === "women's clothing"
      );
      setProducts(womensclothing);
    } else {
    }
  };

  const toggleTheme = () => {
    setNightTheme(!nightTheme);
  };

  const navigate = useNavigate();

  return (
    <div
      className={` bg-gradient-to-r ${
        nightTheme
          ? "from-blue-950 to-[#bea9de] text-gray-200"
          : "from-pink-500 to-yellow-300"
      } shadow-md fixed top-0 w-full z-50`}
    >
      <div className="flex items-center h-16">
        <p
          onClick={() => {
            setProducts(ogProducts);
            navigate("/");
          }}
          className="text-lg font-bold ml-4"
        >
          Rishav Store
        </p>

        <input
          onKeyUp={handleSearch}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="w-64 h-10 px-4 py-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ml-[20px] "
          placeholder="Search..."
        />
        <div className="m-auto">
          <div className="hidden md:flex">
            {" "}
            {/* hide on screen less than 700px */}
            <button
              onClick={() => handleClick("men's clothing")}
              className={`font-bold text-gray-800 ${
                nightTheme ? "hover:text-white" : "hover:text-yellow-600"
              }  ml-4  transition duration-300 ease-in-out`}
            >
              Men's Clothing
            </button>
            <button
              onClick={() => handleClick("jewelery")}
              className={`font-bold text-gray-800 ${
                nightTheme ? "hover:text-white" : "hover:text-yellow-600"
              } ml-4 transition duration-300 ease-in-out`}
            >
              Jewelry
            </button>
            <button
              onClick={() => handleClick("electronics")}
              className={`font-bold text-gray-800 ${
                nightTheme ? "hover:text-white" : "hover:text-yellow-600"
              } ml-4  transition duration-300 ease-in-out`}
            >
              Electronics
            </button>
            <button
              onClick={() => handleClick("women's clothing")}
              className={`font-bold text-gray-800 ${
                nightTheme ? "hover:text-white" : "hover:text-yellow-600"
              } ml-4  transition duration-300 ease-in-out`}
            >
              Women's Clothing
            </button>
          </div>
        </div>
        <ThemeSwitch className="mr-1" onClick={() => toggleTheme()} />
        <button
          onClick={() => {
            logout();
          }}
          className={`relative mr-4 inline-block px-4 py-2 text-white font-bold transition duration-300 ease-in-out bg-gradient-to-r ${
            nightTheme
              ? "from-[#090254] to-[#bea9de] hover:from-[#bea9de] hover:to-blue-950"
              : "from-orange-700 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600"
          } rounded-md shadow-lg border-2`}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
