import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { UserProvider } from "./context/UserContext";
import Register from "./pages/Register/Register";

import PageLayout from "./components/pageLayout/PageLayout";
import { PageProvider } from "./context/PageContext";
import MoviePage from "./pages/Movie/Movie";
import { ErrorProvider } from "./context/ErrorContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyAccount from "./pages/MyAccount/MyAccount";
import ErrorPage from "./pages/Error/ErrorPage";
import PrivateRoutes from "./redirectRoutes/PrivateRoutes";
import PublicRoutes from "./redirectRoutes/PublicRoutes";

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
      <Route path="/errorPage" element={<ErrorPage />} />

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
