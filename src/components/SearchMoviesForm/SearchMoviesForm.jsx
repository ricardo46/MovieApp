import { useEffect, useState } from "react";
import { getMoviesDataFromAPI } from "../../utils/apiUtils";
import MultipleInputForm from "../MultipleInputForm/MultipleInputForm";
import { useGetAPIData } from "../UseGetAPIData";
import { MESSAGE_DURATION } from "../../globalVariables";
import { SearchMoviesFormContainer } from "./SearchMoviesFormStyledComponents";
import UserMessage from "../UserMessage/UserMessage";

const SearchMoviesForm = ({ updateMovies }) => {
  const [inputValue, setInputValue] = useState("");
  const { data: moviesData, submitRequest, newFetch } = useGetAPIData();
  const [previousInput, setPreviousInput] = useState("");
  const [messageIsVisible, setMessageIsVisible] = useState(false);

  useEffect(() => {
    newFetch({ apiParams: [inputValue], apiRequest: getMoviesDataFromAPI });
  }, []);

  useEffect(() => {
    updateMovies(moviesData.items);
    console.log("moviesData.items1", moviesData.itemsReceived);

    if (moviesData.itemsReceived == 0) {
      console.log("moviesData.items2", moviesData.itemsReceived);

      setMessageIsVisible(true);
      setTimeout(() => {
        setMessageIsVisible(false);
      }, MESSAGE_DURATION);
    }
    setInputValue("");
  }, [moviesData]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setPreviousInput(inputValue);
    newFetch({ apiParams: [inputValue], apiRequest: getMoviesDataFromAPI });
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <SearchMoviesFormContainer>
        <MultipleInputForm
          onFormSubmit={onSearchSubmit}
          inputs={[{ name: "MovieName", type: "text", value: inputValue }]}
          submitRequest={submitRequest}
          submitButtonName={"Search"}
          onInputChange={onInputChange}
        />
        {messageIsVisible &&
          moviesData.itemsReceived == 0 &&
          !submitRequest.isLoading && (
            <UserMessage
              type={"error"}
              messageContent={`Movie ${previousInput} not found`}
            />
          )}
      </SearchMoviesFormContainer>
    </>
  );
};

export default SearchMoviesForm;
