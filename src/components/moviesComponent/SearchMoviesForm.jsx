import { useEffect, useState } from "react";
import { getMoviesDataFromAPI } from "../../utils/apiUtils";
import MultipleInputForm from "../MultipleInputForm/MultipleInputForm";
import { useGetAPIData } from "../UseGetAPIData";

const SearchMoviesForm = ({ updateMovies }) => {
  const [inputValue, setInputValue] = useState("");
  const { data: moviesData, submitRequest, getData } = useGetAPIData();

  useEffect(() => {
    getData({ apiParams: [inputValue], apiRequest: getMoviesDataFromAPI });
  }, []);

  useEffect(() => {
    console.log("moviesData", moviesData);
    updateMovies(moviesData.items);
  }, [submitRequest, moviesData]);

  const onSearchSubmit = (e) => {
    setInputValue("");
    e.preventDefault();
    getData({ apiParams: [inputValue], apiRequest: getMoviesDataFromAPI });
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
