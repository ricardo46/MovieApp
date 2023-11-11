import axios from "axios";
import { getLocalStorageItem, setLocalStorageItem } from "./localStorageUtils";

const logUserInAPI = ({ email, password }) => {
  // console.log("logUserInAPI request!!!");
  return axios.post(
    "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/auth/login",
    { email, password } //pass: aaa111222
  );
};

const registerUserInAPI = ({ name, email, password }) => {
  // console.log("registerUserInAPI request!!!");
  const response = axios.post(
    "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/auth/signup",
    { name, email, password } //pass: aaa111222
  );

  return response;
};

const getUserInAPI = (authToken) => {
  // console.log("getUserInAPI request!!!");

  const response = axios.get(
    "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/auth/me",
    { headers: { Authorization: "Bearer " + authToken } }
  );

  return response;
};

const getMovieDataFromAPI = ([movieId]) => {
  // console.log("getMovieDataFromAPI request!!!");
  const response = axios.get(
    `https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movie/${movieId}`
  );
  return response;
};

const getMoviesDataFromAPI = ([movieName]) => {
  return axios.get("https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movies", {
    params: { searchTitle: movieName },
  });
};

const postMoviesList = (name, list) => {
  const authToken = getLocalStorageItem("authToken");
  const response = axios.post(
    "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movielist",
    {
      name,
      list,
    },
    { headers: { Authorization: `Bearer ${authToken}` } }
  );
  return response;
};

const postUserList = (user_id, movieLists) => {
  // console.log("postUserList", movieLists);

  const authToken = getLocalStorageItem("authToken");
  return axios.patch(
    `https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/user/${user_id}`,

    {
      movieLists,
    }
  );
};

const patchListWithMovie = (movielist_id, list) => {
  return axios.patch(
    `https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movielist/${movielist_id}`,
    {
      movielist_id,
      list,
    }

    // { headers: { Authorization: `Bearer ${authToken}` } }
  );
};

export {
  logUserInAPI,
  getUserInAPI,
  getMovieDataFromAPI,
  getMoviesDataFromAPI,
  postMoviesList,
  postUserList,
  patchListWithMovie,
  registerUserInAPI,
};
