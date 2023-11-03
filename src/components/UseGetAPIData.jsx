import { useNavigate } from "react-router-dom";
import { useError } from "../context/ErrorContext";
import { useEffect, useState } from "react";
import { getMovieDataFromAPI } from "../utils/apiUtils";

// export const useGetAPIData = ({ apiParams, apiRequest }) => {
export const useGetAPIData = () => {
  // export const useGetAPIData = ({ apiParams, setMovie,apiRequest }) => {
  // const { error, setError } = useError();
  // const navigate = useNavigate();

  // const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);

  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });
  // console.log("useEffectArray", useEffectArray);

  const newFetch = async ({ apiParams, apiRequest }) => {
    try {
      // console.log('apiParams',apiParams)
      // console.log("inside newFetch.....");

      setSubmitRequest({
        isLoading: true,
      });
      const response = await apiRequest(apiParams);
      console.log("response11111", response);

      setData(() => response.data);

      setSubmitRequest({
        error: false,
        submitted: true,
        isLoading: false,
      });
    } catch (err) {
      console.log("err", err);

      setSubmitRequest({
        error: true,
        submitted: true,
        errorMessage: err.response.data.message,
        isLoading: false,
      });
    }
  };

  // useEffect(() => {
  //   newFetch();
  // }, useEffectArray);

  // return { data, submitRequest };
  return { data, submitRequest, newFetch };
};
