import { useContext } from "react";
import mycontext from "../contexts/Mycontex";
import { AlldataProducts } from "../contexts/Mycontex";
import { ThemeContext } from "../contexts/ThemeContext";
import { ThemeType } from "../contexts/ThemeContext";

const Sidebar = () => {
  let {
    clickedProducts,
    setClickedProducts,
    sidebarOpen,
    setSidebarOpen,
  } = useContext(mycontext) as AlldataProducts;

  let { nightTheme } = useContext(ThemeContext) as ThemeType;

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

  // Calculate total price
  const totalPrice = clickedProducts.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  return (
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
        <div className="CartCount mr-2 ml-2 p-1 bg-yellow-400  font-bold rounded-md shadow-inner text-gray-600 ">
           Products count : {clickedProducts.length}
        </div>
        <div className="TotalPrice mr-1 bg-green-500 shadow-inner rounded-md font-semibold p-1">
          Total Bill: ${totalPrice.toFixed(2)}
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
            <span className="px-2 text-white">{product.count}</span>
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
  );
};

export default Sidebar;

