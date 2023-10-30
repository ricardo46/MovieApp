import { useEffect, useState } from "react";
import {
  getMoviesDataFromAPI,
  requestWasSuccessful,
} from "../../utils/apiUtils";

import OneInputForm from "../oneInputForm/OneInputForm";

const SearchMoviesForm = ({ updateMovies }) => {
  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  const [inputValue, setInputValue] = useState("");

  const requestMoviesFromAPI = async () => {
    setSubmitRequest({
      isLoading: true,
    });
    const response = await getMoviesDataFromAPI(inputValue);

    if (requestWasSuccessful(response)) {

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
        onFormSubmit={onSearchSubmit}
        inputName={"MovieName"}
        submitRequest={submitRequest}
        submitButtonName={"Search movie"}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
};

export default SearchMoviesForm;
