import Navbar from "./Navbar.tsx";
import DisplayProduct from "./DisplayProduct.tsx";
import ThemeProvider from "../contexts/ThemeContext";

const Mainsite = () => {
  return (
    <div className="bg-gradient-to-br from-[#8b849a] to-[#E7E9BB]">
      {/* <ThemeProvider> */}
        <Navbar />
        <DisplayProduct />
      {/* </ThemeProvider> */}
    </div>
  );
};

export default Mainsite;
