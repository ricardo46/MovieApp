import { Outlet, useNavigate } from "react-router-dom";

import { useUser } from "../../context/UserContext";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import {
  DashBoard,
  DashBoardMessage,
  HeadersContainer,
  PageContainer,
  PageHeader,
  OutletContainer,
  DashBoardStyledLink,
  DashBoardLinksContainer,
} from "./PageLayoutStyledComponents";
import { useEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import {
  getUserInAPI,
  responseStatusIsRequestsLimit,
} from "../../utils/apiUtils";
import { useError } from "../../context/ErrorContext";

const UserWelcomeMessage = ({ apiResponse }) => {
  const { user } = useUser();
  const [message, setMessage] = useState("");

  useEffect(() => {
    user.id
      ? setMessage(`Welcome: ${user.name}`)
      : setMessage("Please login or register");
  }, [user]);

  return <>{apiResponse.responseReceived && message}</>;
};

const PageLayout = () => {
  const navigate = useNavigate();
  const { user, setUser, auth, setAuth } = useUser();
  const { subPageData, setSubPageData } = usePage();
  const { error, setError } = useError();

  const [apiResponse, setApiResponse] = useState({ responseReceived: false });
  const subPageName = subPageData.name;

  const getUser = async () => {
    try {
      const authToken = getLocalStorageItem("authToken");

      const response = await getUserInAPI(authToken);
      setApiResponse((prev) => ({
        ...prev,
        responseReceived: true,
      }));
      const user = response.data;

      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        movieLists: user.movieLists,
      });

      setAuth(true);
      console.log("User is logged in!");
    } catch (err) {
      console.log("User not logged in!");

      if (responseStatusIsRequestsLimit(err)) {
        setError({
          message: err.response.data.message,
        });
        navigate("/errorPage");
      } else {
        console.log("Token not valid", err);
        localStorage.clear();
      }

      setApiResponse((prev) => ({
        ...prev,
        responseReceived: true,
        // status: err.status,
      }));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const logOutEvent = () => {
    setAuth(false);
    setUser({});
    localStorage.clear();
  };
  return (
    <>
      {apiResponse.responseReceived && (
        <PageContainer>
          <DashBoard>
            <HeadersContainer>
              <PageHeader>Movie App</PageHeader>
              <PageHeader>{subPageName}</PageHeader>
            </HeadersContainer>
            {!error.status && (
              <DashBoardLinksContainer>
                <DashBoardStyledLink to="/">Home</DashBoardStyledLink>
                {!auth && (
                  <DashBoardStyledLink to="/login">login</DashBoardStyledLink>
                )}

                {!auth && (
                  <DashBoardStyledLink to="/register">
                    register
                  </DashBoardStyledLink>
                )}

                {auth && (
                  <DashBoardStyledLink to="/myAccount">
                    myAccount
                  </DashBoardStyledLink>
                )}

                {auth && (
                  <DashBoardStyledLink onClick={logOutEvent}>
                    logout
                  </DashBoardStyledLink>
                )}

                <DashBoardMessage>
                  <UserWelcomeMessage apiResponse={apiResponse} />
                </DashBoardMessage>
              </DashBoardLinksContainer>
            )}
          </DashBoard>
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </PageContainer>
      )}
    </>
  );
};

export default PageLayout;
