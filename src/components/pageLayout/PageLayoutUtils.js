import {
  HOME_PATH,
  LOGIN_PATH,
  MOVIE_PATH,
  MY_ACCOUNT_PATH,
  REGISTER_PATH,
} from "../../globalVariables";

const currentPageIsHome = (location) => {
  return location.pathname == HOME_PATH;
};

const currentPageIsLogin = (location) => {
  return location.pathname == LOGIN_PATH;
};

const currentPageIsMyAccount = (location) => {
  return location.pathname == MY_ACCOUNT_PATH;
};

const currentPageIsRegister = (location) => {
  return location.pathname == REGISTER_PATH;
};

const currentPageIsMovie = (location) => {
  return location.pathname.split("/").includes(MOVIE_PATH.split("/")[0]);
};

export {
  currentPageIsHome,
  currentPageIsLogin,
  currentPageIsMyAccount,
  currentPageIsRegister,
  currentPageIsMovie,
};
