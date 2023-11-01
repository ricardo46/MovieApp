import { useEffect, useState } from "react";
import {
  getMoviesDataFromAPI,
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
    try{
    setSubmitRequest({
      isLoading: true,
    });
    const response = await getMoviesDataFromAPI(inputValue);

      updateMovies(response.data.items);
      setSubmitRequest({
        error: false,
        submitted: true,
        isLoading: false,
      });
  } catch (error) {

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
    setInputValue("");
    e.preventDefault();
    requestMoviesFromAPI();
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <MultipleInputForm
      onFormSubmit={onSearchSubmit}
      inputs={[{ name: "MovieName", type: "text", value: inputValue }]}
      submitRequest={submitRequest}
      submitButtonName={"Search"}
      onInputChange={onInputChange}
    />
  );
};

export default SearchMoviesForm;
