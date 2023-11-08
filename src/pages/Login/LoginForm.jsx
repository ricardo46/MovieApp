import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { logUserInAPI } from "../../utils/apiUtils";
import { setLocalStorageItem } from "../../utils/localStorageUtils";
import MultipleInputForm from "../../components/MultipleInputForm/MultipleInputForm";
import { useGetAPIData } from "../../components/UseGetAPIData";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser, setAuth } = useUser();
  const [email, setEmail] = useState("Insert email");
  const [password, setPassword] = useState("Insert password");

  const { data: userData, submitRequest, newFetch } = useGetAPIData();

  const onInputChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    newFetch({ apiParams: {email, password}, apiRequest: logUserInAPI });
    console.log('but Search')

  };

  useEffect(() => {
    if (userData.user) {
      const authToken = userData.authToken;
      setLocalStorageItem("authToken", authToken);
      console.log("userData", userData);
      const user = userData.user;
      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        movieLists: user.movieLists,
      });
      setAuth(() => true);
      navigate("/myAccount");
    }
  }, [userData]);

  
  const handleClick = (e) => {
    if (e.target.name == "email") {
      setEmail('');
    }
    if (e.target.name == "password") {
      setPassword('');
    }
   
  };
  
  

  return (
    <MultipleInputForm
      onFormSubmit={onLoginSubmit}
      handleClick={handleClick}
      inputs={[
        { name: "email", type: "email", value: email },
        { name: "password", type: "password", value: password },
      ]}
      submitRequest={submitRequest}
      submitButtonName={"Login"}
      onInputChange={onInputChange}
    />
  );
};

export default LoginForm;
