import { useState } from "react";
import OneInputForm from "../oneInputForm/OneInputForm";
import { useUser } from "../../context/UserContext";
import DropDown from "../dropDown/DropDown";
import {
  postMoviesList,
  postUserList,
  requestWasSuccessful,
} from "../../utils/apiUtils";
import {
  getListNamesArray,
  listNameExists,
  stringIsEmpty,
  validNewListName,
} from "./userListsUtils";

const UserLists = ({ setMovieList, setMovieListObj }) => {
  const { user, setUser } = useUser();

  const movieLists = user.movieLists;
  const [inputValue, setInputValue] = useState("");
  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  const onListChange = (e) => {
    const list = movieLists.find((el) => el.id == e.target.value);
    list ? setMovieList(list.list) : setMovieList([]);
    // list ? console.log('actual list obj',list) : console.log('No actual list obj')
    list ? setMovieListObj(list) : setMovieListObj({});
  };

  const onNewListSubmit = async (e) => {
    e.preventDefault();
    let submitSuccessMessage = null;
    let submitErrorMessage = null;

    if (validNewListName(inputValue, movieLists)) {
      setSubmitRequest({
        isLoading: true,
      });
      const postMoviesListResponse = await postMoviesList(inputValue, []);
      if (requestWasSuccessful(postMoviesListResponse)) {
        submitSuccessMessage = `${inputValue} was added to the server`;
        setSubmitRequest({
          error: false,
          submitted: true,
          isLoading: false,
          message: submitSuccessMessage,
        });
      } else {
        submitErrorMessage = `${inputValue} not added to the server!`;
        setSubmitRequest({
          error: true,
          submitted: true,
          isLoading: false,
          errorMessage: submitErrorMessage,
        });
      }
      const userId = user.id;
      console.log("movieLists", movieLists);
      const userPreviousListsIds = movieLists.map((list) => ({
        movielist_id: list.movielist_id,
      }));
      const newListId = postMoviesListResponse.data.id;

      const movieListsIds = [
        ...userPreviousListsIds,
        { movielist_id: newListId },
      ];
      const postUserListResponse = await postUserList(userId, movieListsIds);

      if (requestWasSuccessful(postUserListResponse)) {
        setSubmitRequest({
          error: false,
          submitted: true,
          isLoading: false,
          message: `${submitSuccessMessage}\n${inputValue} was added to the user`,
        });
      } else {
        setSubmitRequest({
          error: true,
          submitted: true,
          errorMessage: `${submitErrorMessage}\n${inputValue} not added to the user!`,
          isLoading: false,
        });
      }

      const newMovieLists = [
        ...movieLists,
        { movielist_id: newListId, name: inputValue, list: [] },
      ];
      setUser((prev) => ({
        ...prev,
        movieLists: newMovieLists,
      }));
    } else {
      listNameExists(inputValue, getListNamesArray(movieLists)) &&
        setSubmitRequest({
          message: "That list already exists!",
        });
      stringIsEmpty(inputValue) &&
        setSubmitRequest({
          message: "Please enter a list name!",
        });
    }
  };

  return (
    <>
      <OneInputForm
        onFormSubmit={onNewListSubmit}
        inputName={"NewListName"}
        submitRequest={submitRequest}
        submitButtonName={"Create new list"}
        inputValue={inputValue}
        setInputValue={setInputValue}
        acceptEmptyInput={false}
      />
      <DropDown
        onChangeFunction={onListChange}
        defaultDropDownValue={`${user.name} movie lists`}
        list={movieLists}
        listIterator={"movielist_id"}
        itemPropertyToShow={"name"}
      />
    </>
  );
};

export default UserLists;
