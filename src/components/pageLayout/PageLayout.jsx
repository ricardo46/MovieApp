import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

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
  DashBoardLinksAndUserContainer,
} from "./PageLayoutStyledComponents";
import { useEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import { getUserInAPI } from "../../utils/apiUtils";
import {
  APP_NAME,
  HOME_LINK_NAME,
  LOGIN_LINK_NAME,
  LOGOUT_LINK_NAME,
  MY_ACCOUNT_LINK_NAME,
  REGISTER_LINK_NAME,
} from "../../globalVariables";
import {
  currentPageIsHome,
  currentPageIsLogin,
  currentPageIsMyAccount,
  currentPageIsRegister,
} from "./PageLayoutUtils";
import UserWelcomeMessage from "./UserWelvomeMessage";

const PageLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, auth, setAuth } = useUser();
  const { subPageData, setSubPageData } = usePage();

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

      setApiResponse((prev) => ({
        ...prev,
        responseReceived: true,
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
              <PageHeader>{APP_NAME}</PageHeader>
              <PageHeader>{subPageName}</PageHeader>
            </HeadersContainer>
            <DashBoardLinksAndUserContainer>
              {" "}
              <DashBoardLinksContainer>
                {!currentPageIsHome(location) && (
                  <DashBoardStyledLink to="/">
                    {HOME_LINK_NAME}
                  </DashBoardStyledLink>
                )}
                {!currentPageIsLogin(location) && !auth && (
                  <DashBoardStyledLink to="/login">
                    {LOGIN_LINK_NAME}
                  </DashBoardStyledLink>
                )}

                {!currentPageIsRegister(location) && !auth && (
                  <DashBoardStyledLink to="/register">
                    {REGISTER_LINK_NAME}
                  </DashBoardStyledLink>
                )}

                {!currentPageIsMyAccount(location) && auth && (
                  <DashBoardStyledLink to="/myAccount">
                    {MY_ACCOUNT_LINK_NAME}
                  </DashBoardStyledLink>
                )}

                {auth && (
                  <DashBoardStyledLink onClick={logOutEvent}>
                    {LOGOUT_LINK_NAME}
                  </DashBoardStyledLink>
                )}
              </DashBoardLinksContainer>
              <DashBoardMessage>
                <UserWelcomeMessage apiResponse={apiResponse} />
              </DashBoardMessage>
            </DashBoardLinksAndUserContainer>
            {/* // )} */}
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
