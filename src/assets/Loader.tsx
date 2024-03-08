import LoadingImage from "./Loading.png";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <img
        src={LoadingImage}
        alt="Loading"
        className="animate-spin h-96 w-96"
      />
      <p className="mt-4 text-lg font-semibold">Loading</p>
    </div>
  );
};

export default Loader;
