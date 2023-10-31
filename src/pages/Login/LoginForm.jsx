import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { logUserInAPI } from "../../utils/apiUtils";
import { setLocalStorageItem } from "../../utils/localStorageUtils";
import MultipleInputForm from "../../components/MultipleInputForm/MultipleInputForm";

const LoginForm = () => {
  const navigate = useNavigate();
  const { user, setUser, auth, setAuth } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  const onInputChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();


    setSubmitRequest({
      isLoading: true,
    });
    try {
      const response = await logUserInAPI(email, password);
      const authToken = response.data.authToken;
      setLocalStorageItem("authToken", authToken);
      const user = response.data.user;
      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        movieLists: user.movieLists,
      });
      setSubmitRequest({
        error: false,
        submitted: true,
        isLoading: false,
      });
      setAuth(() => true);
      navigate("/myAccount");
    } catch (err) {
      setSubmitRequest({
        error: true,
        submitted: true,
        errorMessage: err.response.data.message,
        isLoading: false,
      });
    }
  };

  return (
    <MultipleInputForm
      onFormSubmit={onLoginSubmit}
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
