import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import Home from "./components/homeComponents/Home";
import Register from "./components/registerComponents/Register";
import Login from "./components/loginComponents/Login";

import MyAccount from "./components/myAccountComponents/MyAccount";
import PrivateRoutes from "./components/redirectRoutes/PrivateRoutes";
import PublicRoutes from "./components/redirectRoutes/PublicRoutes";
import PageLayout from "./components/pageLayoutComponents/PageLayout";
import { PageProvider } from "./context/PageContext";
import MoviePage from "./components/moviePageComponents/MoviePage";
import { ErrorProvider } from "./context/ErrorContext";
import ErrorComponent from "./components/errorComponent/ErrorComponent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route element={<PrivateRoutes />}>
        <Route path="/myAccount" element={<MyAccount />} />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route index element={<Home />} />
      {/* path="/" is same as index */}
      <Route path="/errorPage" element={<ErrorComponent />} />
      

      <Route path="/:movieId" element={<MoviePage />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <>
    <ErrorProvider>
        <PageProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </PageProvider>
        </ErrorProvider>
    </>
  );
}

export default App;
