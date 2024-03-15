import Navbar from "./Navbar.tsx";
import DisplayProduct from "./DisplayProduct.tsx";
import SiteFooter from "./SiteFooter.tsx";

const Mainsite = () => {
  return (
    <>
      <div className=" border-red-600 mt-[63px] min-h-screen bg-gradient-to-br from-[#8b849a] to-[#E7E9BB]">
        <Navbar />
        <DisplayProduct />  
      </div>
      <SiteFooter />  
    </>
  );
};

export default Mainsite;
