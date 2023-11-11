import { useState } from "react";
import { postMoviesList, postUserList } from "../../utils/apiUtils";
import {
  getListNamesArray,
  listNameExists,
  stringIsEmpty,
  validNewListName,
} from "../../utils/utils";
import MultipleInputForm from "../../components/MultipleInputForm/MultipleInputForm";
import { getNewListObject, getUpdatedMovieListsIds } from "./userListsUtils";
import { useUser } from "../../context/UserContext";
import DropDown from "../../components/dropDown/DropDown";

const UserLists = ({ movieListObj, setMovieListObj }) => {
  const { user, updateUser } = useUser();
  const userId = user.id;
  const movieLists = user.movieLists;
  const [inputValue, setInputValue] = useState("");
  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  const onListChange = (e) => {
    const list = movieLists.find((el) => el.id == e.target.value);
    list ? setMovieListObj(list) : setMovieListObj({});
    // console.log("onListChange list", list);
  };

  const onNewListSubmit = async (e) => {
    setInputValue("");
    e.preventDefault();
    let submitSuccessMessage = null;
    let submitErrorMessage = null;

    if (validNewListName(inputValue, movieLists)) {
      try {
        setSubmitRequest({
          isLoading: true,
        });
        const postMoviesListResponse = await postMoviesList(inputValue, []);
        submitSuccessMessage = `${inputValue} was added to the server`;

        setSubmitRequest({
          submitted: true,
          isLoading: false,
          message: submitSuccessMessage,
        });

        const newListId = postMoviesListResponse.data.id;
        await postUserList(
          userId,
          getUpdatedMovieListsIds(movieLists, newListId)
        );
        setSubmitRequest({
          submitted: true,
          isLoading: false,
          message: `${submitSuccessMessage}\n${inputValue} was added to the user`,
        });
        const newList = getNewListObject(newListId, inputValue);
        const newMovieLists = [...movieLists, newList];

        updateUser({ movieLists: newMovieLists });
        setMovieListObj(newList);
      } catch (err) {
        console.log("err", err);

        submitErrorMessage = `${inputValue} not added to the server!`;
        setSubmitRequest({
          error: true,
          submitted: true,
          isLoading: false,
          errorMessage: submitErrorMessage,
        });
      }
    } else {
      listNameExists(inputValue, getListNamesArray(movieLists)) &&
        setSubmitRequest({
          error: true,
          errorMessage: "That list already exists!",
        });
      stringIsEmpty(inputValue) &&
        setSubmitRequest({
          error: true,
          errorMessage: "Please enter a list name!",
          submitted: true,
          isLoading: false,
        });
    }
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <MultipleInputForm
        onFormSubmit={onNewListSubmit}
        inputs={[{ name: "NewListName", type: "text", value: inputValue }]}
        submitRequest={submitRequest}
        submitButtonName={"Create new list"}
        onInputChange={onInputChange}
      />
      <DropDown
        onChangeFunction={onListChange}
        movieListObj={movieListObj}
        defaultDropDownValue={movieListObj?.name}
        list={movieLists}
        listIterator={"movielist_id"}
        itemPropertyToShow={"name"}
      />
    </>
  );
};

export default UserLists;
