import axios from "axios";
import { setLocalStorageItem } from "./localStorageUtils";

const logUserInAPI = async (email, password) => {
  console.log("logUserInAPI request!!!");
  try {
    const loginResponse = await axios.post(
      "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/auth/login",
      { email, password } //pass: aaa111222
    );
    console.log("loginResponse", loginResponse);
    const authToken = loginResponse.data.authToken;
    setLocalStorageItem("authToken", authToken);

    return loginResponse;
  } catch (err) {
    console.log("logUserInAPI error", err);
    return err;
  }
};

const getUserInAPI = async (authToken) => {
  console.log("getUserInAPI request!!!");

  try {
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/auth/me",
      { headers: { Authorization: "Bearer " + authToken } }
    );

    return response;
  } catch (err) {
    return err;
  }
};

const getMovieDataFromAPI = async (movieId) => {
  console.log("getMovieDataFromAPI request!!!");

  try {
    const response = await getMovie(movieId);

    return response;
  } catch (err) {
    return err;
  }
};

const requestWasSuccessful = (apiResponse) => apiResponse.status == "200";

const responseStatusIsRequestsLimit = (apiResponse) => {
  if (apiResponse.response.status == "429") {
    console.log(
      "Requests limit was reached!",
      "Status:",
      apiResponse.response.status
    );
    return true;
  }
  return false;
};

const getFilteredMovies = (movieName) => {
  const response = axios.get(
    "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movies",
    {
      params: { searchTitle: movieName },
    }
  );
  console.log("getFilteredMovies request!!!");
  return response;
};

const getMovie = (movieId) => {
  console.log("getMovie request!!!");

  return axios.get(
    `https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/movie/${movieId}`
  );
};

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

const getMoviesDataFromAPI = async (movieName) => {
  try {
    const response = await getFilteredMovies(movieName);
    return response;
  } catch (err) {
    return err;
  }
};

export {
  getFilteredMovies,
  getMovie,
  // getDirectorMovies,
  logUserInAPI,
  getUserInAPI,
  requestWasSuccessful,
  responseStatusIsRequestsLimit,
  getMovieDataFromAPI,
  getMoviesDataFromAPI,
};
