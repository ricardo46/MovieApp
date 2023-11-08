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
  console.log("registerUserInAPI request!!!");
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
  // const response = await getMovie(movieId);
  const response = axios.get(
    `https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movie/${movieId}`
  );
  console.log("getMovieDataFromAPI_Response", response);
  return response;
};

// const requestWasSuccessful = (apiResponse) => apiResponse.status == "200";

const responseStatusIsRequestsLimit = (apiResponse) => {
  // if (apiResponse.response.status == "429") {
  //   console.log(
  //     "Requests limit was reached!",
  //     "Status:",
  //     apiResponse.response.status
  //   );
  //   return true;
  // }
  return false;
};

// const getFilteredMovies = (movieName) => {
//   const response = axios.get(
//     "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movies",
//     {
//       params: { searchTitle: movieName },
//     }
//   );
//   // console.log("getFilteredMovies request!!!");
//   return response;
// };

// const getMovie = (movieId) => {
//   // console.log("getMovie request!!!");

//   return axios.get(
//     `https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movie/${movieId}`
//   );
// };

// const getDirectorMovies = (directorId) => {
//   console.log("getDirectorMovies request!!!");

//   const response = axios.get(
//     "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movies_from_director_id",
//     {
//       params: { directorId: directorId },
//     }
//   );
//   return response;
// };

const getMoviesDataFromAPI = ([movieName]) => {
  // try {
  //   const response = await getFilteredMovies(movieName);
  //   return response;
  // } catch (err) {
  //   return err;
  // }
  return axios.get("https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movies", {
    params: { searchTitle: movieName },
  });
};

const postMoviesList = (name, list) => {
  const authToken = getLocalStorageItem("authToken");
  // try {
  const response = axios.post(
    "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movielist",
    {
      name,
      list,
    },
    { headers: { Authorization: `Bearer ${authToken}` } }
  );
  console.log("response11111", response);
  return response;
  // } catch (error) {
  //   return error;
  // }
};

const postUserList = (user_id, movieLists) => {
  const authToken = getLocalStorageItem("authToken");
  console.log("postUserList", movieLists);
  // try {
  return axios.patch(
    `https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/user/${user_id}`,

    {
      movieLists,
    }
  );
  // console.log("response", response);
  // return response;
  // } catch (error) {
  //   // console.log("error", error);
  //   return error;
  // }
};

const patchListWithMovie = (movielist_id, list) => {
  // const authToken = getLocalStorageItem("authToken");
  // console.log('movielist_id',movielist_id)
  // console.log('list',list)

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
  responseStatusIsRequestsLimit,
  getMovieDataFromAPI,
  getMoviesDataFromAPI,
  postMoviesList,
  postUserList,
  patchListWithMovie,
  registerUserInAPI,
};
