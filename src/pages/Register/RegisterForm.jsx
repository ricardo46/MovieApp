import axios from "axios";
import { useState } from "react";
import MultipleInputForm from "../../components/MultipleInputForm/MultipleInputForm";
import { useUser } from "../../context/UserContext";
import { logUserInAPI } from "../../utils/apiUtils";
import { setLocalStorageItem } from "../../utils/localStorageUtils";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser, auth, setAuth } = useUser();

  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  const navigate = useNavigate();

  const onRegisterSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitRequest({
        isLoading: true,
      });
      let response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/auth/signup",
        { name, email, password } //pass: aaa111222
      );

      response = await logUserInAPI(email, password);
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
      // se der erro, por exemplo ja existir um user com estes dados, mostra uma mensagem
      console.log(err);
      setSubmitRequest({
        error: true,
        submitted: true,
        errorMessage: err.response.data.message,
        isLoading: false,
      });
    }
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

  return (
    <>
      <MultipleInputForm
        onFormSubmit={onRegisterSubmit}
        inputs={[
          { name: "name", type: "text", value: name },
          { name: "email", type: "email", value: email },
          { name: "password", type: "password", value: password },
        ]}
        submitRequest={submitRequest}
        submitButtonName={"Register"}
        onInputChange={onInputChange}
      />
    </>
  );
};

export default RegisterForm;
