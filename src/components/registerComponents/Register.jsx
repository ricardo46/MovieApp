import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const { subPageData, setSubPageData } = usePage();
  useEffect(() => {
    setSubPageData(() => ({ name: `${location.pathname.slice(1,2).toUpperCase()}${location.pathname.slice(2)} Page` }));
  }, []);
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Register;
