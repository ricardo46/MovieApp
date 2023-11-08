import { useState } from "react";

export const useGetAPIData = () => {
  const [data, setData] = useState([]);

  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  const newFetch = async ({ apiParams, apiRequest }) => {
    try {
      setSubmitRequest({
        isLoading: true,
      });
      const response = await apiRequest(apiParams);
      console.log("responsedta", response);
      setData(() => response.data);

      setSubmitRequest({
        error: false,
        submitted: true,
        isLoading: false,
      });
    } catch (err) {
      setSubmitRequest({
        error: true,
        submitted: true,
        errorMessage: err.response.data.message,
        isLoading: false,
      });
    }
  };
  return { data, submitRequest, newFetch };
};
