import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useContext } from "react";
import mycontext from "../contexts/Mycontex";
import { AlldataProducts } from "../contexts/Mycontex";

const ProductReview = () => {
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { clickedProducts, setClickedProducts } = useContext(
    mycontext
  ) as AlldataProducts;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative product-review top-3 mr-4">
      <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
      {submitted ? (
        <>
          <div className="submitted-review border border-gray-300 p-4 rounded-md bg-gradient-to-r from-purple-200 to-blue-200">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Submitted Review:
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: review }}
              className="text-gray-700"
            />
          </div>
          <button
            type="button"
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300 ease-in-out mb-1"
            onClick={() => setSubmitted(false)}
          >
            Delete Review
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <ReactQuill theme="snow" value={review} onChange={setReview} />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-3"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductReview;
