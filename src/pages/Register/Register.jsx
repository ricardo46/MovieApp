import { useEffect } from "react";
import { usePage } from "../../context/PageContext";
import RegisterForm from "./RegisterForm";
import { REGISTER_PAGE_NAME } from "../../globalVariables";

const Register = () => {
  const { subPageData, setSubPageData } = usePage();
  useEffect(() => {
    setSubPageData(() => ({ name: REGISTER_PAGE_NAME }));
  }, []);
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Register;
