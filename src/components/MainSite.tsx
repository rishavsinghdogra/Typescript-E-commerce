import Navbar from "./Navbar.tsx";
import DisplayProduct from "./DisplayProduct.tsx";

const Mainsite = () => {
  return (
    <div className=" relative top-[63px] bg-gradient-to-br from-[#8b849a] to-[#E7E9BB] ">
      <Navbar />
      <DisplayProduct />
    </div>
  );
};

export default Mainsite;
