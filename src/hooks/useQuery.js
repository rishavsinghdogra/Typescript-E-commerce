import { useEffect } from "react";

const useQuery = (apiFunction, { onSuccess, onError } = {}) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiFunction();

      try {
        if (onSuccess) {
          onSuccess(response);
        }
        return response;
      } catch (error) {
        if (onError) {
          onError(error);
        }
      }
    };
    fetchData();
  }, []);
};

export default useQuery;
