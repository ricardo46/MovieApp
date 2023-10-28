import LoginForm from "./LoginForm";
import { useEffect } from "react";
import { usePage } from "../../context/PageContext";

const Login = () => {
  const { subPageData, setSubPageData } = usePage();
  useEffect(() => {
    setSubPageData({
      name: `${location.pathname
        .slice(1, 2)
        .toUpperCase()}${location.pathname.slice(2)} Page`,
    });
  }, []);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
