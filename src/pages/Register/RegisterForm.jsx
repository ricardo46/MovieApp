import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MultipleInputForm from "../../components/MultipleInputForm/MultipleInputForm";
import { useGetAPIData } from "../../components/UseGetAPIData";
import { useUser } from "../../context/UserContext";
import { logUserInAPI, registerUserInAPI } from "../../utils/apiUtils";
import { setLocalStorageItem } from "../../utils/localStorageUtils";

const RegisterForm = () => {
  const [name, setName] = useState("Enter Name");
  const [email, setEmail] = useState("Enter Email");
  const [password, setPassword] = useState("password");
  const { user, setUser, auth, setAuth } = useUser();

  const {
    data: registerData,
    submitRequest: registerSubmitRequest,
    newFetch: newRegisterFetch,
  } = useGetAPIData();

  const {
    data: loginData,
    submitRequest: loginSubmitRequest,
    newFetch: newLoginFetch,
  } = useGetAPIData();

  const navigate = useNavigate();

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    // console.log("registering");

    newRegisterFetch({
      apiParams: { name, email, password },
      apiRequest: registerUserInAPI,
    });
  };

  const onInputChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (registerData.authToken) {
      newLoginFetch({
        apiParams: { email, password },
        apiRequest: logUserInAPI,
      });
    }
  }, [registerData]);

  useEffect(() => {
    if (loginData.user) {
      const authToken = loginData.authToken;
      setLocalStorageItem("authToken", authToken);
      const user = loginData.user;
      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        movieLists: user.movieLists,
      });
      setAuth(() => true);
      navigate("/myAccount");
    }
  }, [loginData]);

  const handleClick = (e) => {
    if (e.target.name == "name") {
      setName("");
    }

    if (e.target.name == "email") {
      setEmail("");
    }
    if (e.target.name == "password") {
      setPassword("");
    }
  };

  return (
    <>
      <MultipleInputForm
        onFormSubmit={onRegisterSubmit}
        handleClick={handleClick}
        inputs={[
          { name: "name", type: "text", value: name },
          { name: "email", type: "email", value: email },
          { name: "password", type: "password", value: password },
        ]}
        submitRequest={registerSubmitRequest}
        submitButtonName={"Register"}
        onInputChange={onInputChange}
      />
    </>
  );
};

export default RegisterForm;
