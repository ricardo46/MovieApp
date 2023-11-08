import LoginForm from "./LoginForm";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import { LOGIN_PAGE_NAME } from "../../globalVariables";

const Login = () => {
  const { subPageData, setSubPageData } = usePage();
  useEffect(() => {
    setSubPageData({
      name: LOGIN_PAGE_NAME,
    });
  }, []);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
