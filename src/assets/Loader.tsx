import tubeSpinner from "./tubeSpinner.svg";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <img src={tubeSpinner} alt="Loading" className=" h-32 w-32" />
      <p className="mt-4 text-lg font-semibold">Loading</p>
    </div>
  );
};

export default Loader;
