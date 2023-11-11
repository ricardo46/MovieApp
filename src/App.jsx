import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import Register from "./pages/Register/Register";

import { PageProvider } from "./context/PageContext";
import MoviePage from "./pages/Movie/Movie";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyAccount from "./pages/MyAccount/MyAccount";
import {
  HOME_PATH,
  LOGIN_PATH,
  MOVIE_PATH,
  MY_ACCOUNT_PATH,
  REGISTER_PATH,
} from "./globalVariables";
import PrivateRoutes from "./redirectRoutes/PrivateRoutes";
import PublicRoutes from "./redirectRoutes/PublicRoutes";
import PageLayout from "./components/PageLayout/PageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME_PATH} element={<PageLayout />}>
      <Route element={<PrivateRoutes />}>
        <Route path={MY_ACCOUNT_PATH} element={<MyAccount />} />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path={REGISTER_PATH} element={<Register />} />
        <Route path={LOGIN_PATH} element={<Login />} />
      </Route>

      <Route index element={<Home />} />

      <Route path={MOVIE_PATH} element={<MoviePage />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <PageProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </PageProvider>
    </>
  );
}

export default App;
