import { useEffect, useState } from "react";


const useQuery = (apiFunction, { onSuccess, onError } = {}) => {
  const [loading, setLoading] = useState(true);
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
  return {loading, setLoading};
};

export default useQuery;
