import { useEffect, useState } from "react";
import { getMoviesDataFromAPI } from "../../utils/apiUtils";
import MultipleInputForm from "../MultipleInputForm/MultipleInputForm";
import { useGetAPIData } from "../UseGetAPIData";
import UserMessage from "../UserMessage";
import { MESSAGE_DURATION } from "../../globalVariables";

const SearchMoviesForm = ({ updateMovies }) => {
  const [inputValue, setInputValue] = useState("");
  const { data: moviesData, submitRequest, newFetch } = useGetAPIData();
  const [previousInput, setPreviousInput] = useState("");
  const [messageIsVisible, setMessageIsVisible] = useState(true);


  useEffect(() => {
    newFetch({ apiParams: [inputValue], apiRequest: getMoviesDataFromAPI });
  }, []);

  useEffect(() => {
    
    updateMovies(moviesData.items);
    setInputValue("");
  }, [submitRequest, moviesData]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setPreviousInput(inputValue);
    newFetch({ apiParams: [inputValue], apiRequest: getMoviesDataFromAPI });
    setMessageIsVisible(true);
    setTimeout(() => {
      setMessageIsVisible(false);
    }, MESSAGE_DURATION);
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
        submitButtonName={"Search"}
        onInputChange={onInputChange}
      />

      {moviesData.itemsReceived == 0 && messageIsVisible && (
        <UserMessage type={'error'} messageContent={`Movie ${previousInput} not found`} />
      )}
    </>
  );
};

export default SearchMoviesForm;
