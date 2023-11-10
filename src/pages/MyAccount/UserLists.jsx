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
    console.log("onListChange list", list);
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
        // const newMovieLists = getUpdatedMovieLists(movieLists, newList, inputValue);
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
      console.log("Please enter a list name!");
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

// import { useEffect, useState } from "react";
// import { useUser } from "../../context/UserContext";
// import DropDown from "../dropDown/DropDown";
// import { postMoviesList, postUserList } from "../../utils/apiUtils";
// import {
//   getListNamesArray,
//   listNameExists,
//   stringIsEmpty,
//   validNewListName,
// } from "../../utils/utils";
// import MultipleInputForm from "../MultipleInputForm/MultipleInputForm";
// import { updateMovieListObj } from "../../pages/MyAccount/MyAccountUtils";
// import { FormMessage } from "../StyledComponents";
// import { useGetAPIData } from "../UseGetAPIData";

// const UserLists = ({ movieListObj, setMovieListObj }) => {
//   const { user, updateUser } = useUser();
//   const userId = user.id;

//   const movieLists = user.movieLists;
//   const [inputValue, setInputValue] = useState("");
//   const [submitRequest, setSubmitRequest] = useState({
//     isLoading: false,
//     submitted: false,
//     error: false,
//   });

//   const {
//     data: moviesListData,
//     submitRequest: submitRequestListData,
//     newFetch: newFetchMoviesList,
//   } = useGetAPIData();
//   // newFetch({ apiParams: [inputValue, []], apiRequest: postMoviesList });

//   const {
//     data: userListData,
//     submitRequest: submitRequestUserList,
//     newFetch: newFetchUserList,
//   } = useGetAPIData();
//   // newFetch({ apiParams: [userId, movieListsIds], apiRequest: postUserList });

//   const onListChange = (e) => {
//     const list = movieLists.find((el) => el.id == e.target.value);
//     console.log("user", user);
//     console.log("list111", list);

//     list ? setMovieListObj(list) : setMovieListObj({});
//   };
//   const [submitMessage, setSubmitMessage] = useState("");

//   const onNewListSubmit = async (e) => {
//     setInputValue("");
//     e.preventDefault();
//     // console.log('moviesListData',moviesListData)
//     if (validNewListName(inputValue, movieLists)) {
//       newFetchMoviesList({
//         apiParams: [inputValue, []],
//         apiRequest: postMoviesList,
//       });

//       // }
//     } else {
//       listNameExists(inputValue, getListNamesArray(movieLists)) &&
//         setSubmitRequest({
//           message: "That list already exists!",
//         });
//       stringIsEmpty(inputValue) &&
//         setSubmitRequest({
//           message: "Please enter a list name!",
//         });
//     }
//   };

//   const evaluateListData = () => {
//     setSubmitMessage(`${inputValue} was added to the server`);
//     const userPreviousListsIds = movieLists.map((list) => ({
//       movielist_id: list.movielist_id,
//     }));
//     // console.log("moviesListData", moviesListData);
//     const newListId = moviesListData?.data?.id;

//     const movieListsIds = [
//       ...userPreviousListsIds,
//       { movielist_id: newListId },
//     ];
//     const newList = {
//       movielist_id: newListId,
//       id: newListId,
//       name: inputValue,
//       list: [],
//     };
//     updateMovieListObj({ list: newList }, setMovieListObj);
//     newFetchUserList({
//       apiParams: [userId, movieListsIds],
//       apiRequest: postUserList,
//     });
//   };

//   const evaluateUserData = () => {
//     setSubmitMessage((prev) => `${prev}\n${inputValue} was added to the user`);

//     if (!submitRequestListData.error && !submitRequestUserList) {
//       const newMovieLists = [...movieLists, movieListObj.list];
//       // console.log("newMovieLists", newMovieLists);
//       updateUser({ movieLists: newMovieLists });
//     } else {
//       setSubmitMessage(`${inputValue} not added to the server!`);
//     }
//     setSubmitRequest({
//       error: submitRequestListData.error && submitRequestUserList.error,
//       submitted:
//         submitRequestListData.submitted && submitRequestUserList.submitted,
//       isLoading:
//         submitRequestListData.isLoading && submitRequestUserList.isLoading,
//       errorMessage: `${submitRequestListData.isLoading} ${submitRequestUserList.isLoading}`,
//     });
//   };

//   useEffect(() => {
//     if (!submitRequestUserList.error) {
//       evaluateUserData();
//     } else {
//       setSubmitMessage(`${inputValue} not added to the server!`);
//     }
//   }, [user.id]);

//   useEffect(() => {
//     console.log("moviesListData1111", moviesListData);

//     if (!submitRequestListData.error) {

//       evaluateListData();
//     } else {
//       setSubmitMessage(`${inputValue} not added to the server!`);
//     }
//   }, [user.id]);

//   const onInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <>
//       <MultipleInputForm
//         onFormSubmit={onNewListSubmit}
//         inputs={[{ name: "NewListName", type: "text", value: inputValue }]}
//         submitRequest={submitRequest}
//         submitButtonName={"Create new list"}
//         onInputChange={onInputChange}
//       />
//       <FormMessage>{submitMessage}</FormMessage>
//       <DropDown
//         onChangeFunction={onListChange}
//         defaultDropDownValue={`${user.name} movie lists`}
//         list={movieLists}
//         listIterator={"movielist_id"}
//         itemPropertyToShow={"name"}
//       />
//     </>
//   );
// };

// export default UserLists;
