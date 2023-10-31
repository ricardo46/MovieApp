import { useEffect, useState } from "react";
import {
  getMoviesDataFromAPI,
  requestWasSuccessful,
} from "../../utils/apiUtils";
import MultipleInputForm from "../MultipleInputForm/MultipleInputForm";

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
    requestMoviesFromAPI();
  }, []);

  const onSearchSubmit = (e) => {
    setInputValue('');
    e.preventDefault();
    requestMoviesFromAPI();
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <MultipleInputForm 
        onFormSubmit={onSearchSubmit}
        inputs={[{ name: "MovieName", type: "text", value: inputValue }]}
        submitRequest={submitRequest}
        submitButtonName={"Search movie"}
        onInputChange={onInputChange}
      />
    </>
  );
};

export default SearchMoviesForm;
