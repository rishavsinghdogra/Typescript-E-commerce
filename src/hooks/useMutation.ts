import { toast } from "react-toastify";

const useMutate = (apiFunction, { onSuccess, onError } = {}) => {
  const mutate = async (payload) => {
    try {
      const response = await apiFunction(payload);

      if (onSuccess) {
        onSuccess(response);
      }
    } catch (error) {
      toast.error(error.response.data);

      if (onError) {
        onError(error);
      }
    }
  };

  return { mutate };
};

export default useMutate;
