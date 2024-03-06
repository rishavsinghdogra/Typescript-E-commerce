import Navbar from "./Navbar";
import DisplayProduct from "./DisplayProduct";
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
