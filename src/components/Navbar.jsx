import { useContext, useState } from "react";
import mycontext from "../contexts/Mycontex";
import axios from "axios";

export const Navbar = () => {
  const obj = useContext(mycontext);
  const { products, setProducts } = obj;

  const [search, setSearch] = useState("");

  // console.log(products);
  const handleSearch = (event) => {
    // console.log(search);
    if (event.key === "Enter") {
      const searchedProduct = products.filter((value) =>
        value.title.toLowerCase().includes(search.toLowerCase())
      );

      setProducts(searchedProduct);
      // console.log(searchedProduct);
    }
  };

  const handleClick = async (str) => {
    if (str === "men's clothing") {
      const mensClothing = products.filter(
        (value) => value.category === "men's clothing"
      );
      setProducts(mensClothing);
    } else if (str === "jewelery") {
      const jewelery = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      setProducts(jewelery.data);
    } else if (str === "electronics") {
      const electronics = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      setProducts(electronics.data);
    } else if (str === "women's clothing") {
      const womensclothing = products.filter(
        (value) => value.category === "women's clothing"
      );
      setProducts(womensclothing);
    } else {
      console.log("idk");
    }
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 to-yellow-400 shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center h-16">
        <p className="text-lg font-bold ml-4">Fake Store</p>
        <div className="ml-auto mr-auto">
          <input
            onKeyUp={handleSearch}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="searchbar mr-[30px]"
          />
          <button
            onClick={() => handleClick("men's clothing")}
            className="font-bold text-gray-800 hover:text-yellow-600 ml-4  transition duration-300 ease-in-out"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => handleClick("jewelery")}
            className="font-bold text-gray-800 hover:text-yellow-600 ml-4 transition duration-300 ease-in-out"
          >
            Jewelry
          </button>
          <button
            onClick={() => handleClick("electronics")}
            className="font-bold text-gray-800 hover:text-yellow-600 ml-4  transition duration-300 ease-in-out"
          >
            Electronics
          </button>
          <button
            onClick={() => handleClick("women's clothing")}
            className="font-bold text-gray-800 hover:text-yellow-600 ml-4  transition duration-300 ease-in-out"
          >
            Women's Clothing
          </button>
        </div>
        <img
          onClick={handleClick}
          src="src\assets\cart.svg"
          alt="Cart"
          className="h-8 ml-auto mr-4 "
        />
      </div>
    </div>
  );
};

export default Navbar;
