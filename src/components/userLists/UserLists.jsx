import { useState } from "react";
import { useUser } from "../../context/UserContext";
import DropDown from "../dropDown/DropDown";
import {
  postMoviesList,
  postUserList,
} from "../../utils/apiUtils";
import {
  getListNamesArray,
  listNameExists,
  stringIsEmpty,
  validNewListName,
} from "../../utils/utils";
import MultipleInputForm from "../MultipleInputForm/MultipleInputForm";

const UserLists = ({ setMovieListObj }) => {
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
    console.log("user", user);
    console.log("list111", list);

    list ? setMovieListObj(list) : setMovieListObj({});
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
        // if (requestWasSuccessful(postMoviesListResponse)) {
        submitSuccessMessage = `${inputValue} was added to the server`;
        // console.log('postMoviesListResponse',postMoviesListResponse)
        setSubmitRequest({
          error: false,
          submitted: true,
          isLoading: false,
          message: submitSuccessMessage,
        });
        // }
        // else {
        const userId = user.id;
        // console.log("movieLists", movieLists);
        const userPreviousListsIds = movieLists.map((list) => ({
          movielist_id: list.movielist_id,
        }));
        const newListId = postMoviesListResponse.data.id;

        const movieListsIds = [
          ...userPreviousListsIds,
          { movielist_id: newListId },
        ];
        await postUserList(userId, movieListsIds);
        setSubmitRequest({
          error: false,
          submitted: true,
          isLoading: false,
          message: `${submitSuccessMessage}\n${inputValue} was added to the user`,
        });
        // }
        const newList = {
          movielist_id: newListId,
          id: newListId,
          name: inputValue,
          list: [],
        };
        const newMovieLists = [...movieLists, newList];
        console.log("newMovieLists", newMovieLists);
        setUser((prev) => ({
          ...prev,
          movieLists: newMovieLists,
        }));
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
          message: "That list already exists!",
        });
      stringIsEmpty(inputValue) &&
        setSubmitRequest({
          message: "Please enter a list name!",
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
        defaultDropDownValue={`${user.name} movie lists`}
        list={movieLists}
        listIterator={"movielist_id"}
        itemPropertyToShow={"name"}
      />
    </>
  );
};

export default UserLists;
