import { useEffect, useState } from "react";
import {
  getMoviesDataFromAPI,
  requestWasSuccessful,
} from "../../utils/apiUtils";

import OneInputForm from "../oneInputForm/OneInputForm";

const SearchMoviesForm = ({ updateMovies }) => {
  const [movieName, setMovieName] = useState("");
  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  const onValueChange = (e) => {
    setMovieName(e.target.value);
  };

  const requestMoviesFromAPI = async () => {
    setSubmitRequest({
      isLoading: true,
    });
    const response = await getMoviesDataFromAPI(movieName);

    if (requestWasSuccessful(response)) {
      // console.log("response response", response.data);

      updateMovies(response.data.items);
      setSubmitRequest({
        error: false,
        submitted: true,
        isLoading: false,
      });
    } else {
      setSubmitRequest({
        error: true,
        submitted: true,
        errorMessage: response.response.data.message,
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    //showing all available movies when component mounts
    requestMoviesFromAPI();
  }, []);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    requestMoviesFromAPI();
  };

  return (
    <>
      <OneInputForm
        onSearchSubmit={onSearchSubmit}
        inputName={"MovieName"}
        value={movieName}
        onValueChange={onValueChange}
        submitRequest={submitRequest}
      />
    </>
  );
};

export default SearchMoviesForm;
