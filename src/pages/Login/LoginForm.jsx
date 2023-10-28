import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { logUserInAPI, requestWasSuccessful } from "../../utils/apiUtils";
import { StyledLoadingAnimation } from "../../components/Components/Animations";
import { FormMessage } from "../../components/Components/StyledComponents";
import { StyledForm } from "../../components/moviesComponent/SearchFormStyledComponents";

const LoginForm = () => {
  const navigate = useNavigate();
  const { user, setUser, auth, setAuth } = useUser();
  const [formMessage, setFormMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    setSubmitRequest({
      isLoading: true,
    });
    const response = await logUserInAPI(email, password);
    // console.log('login',response.data.user)
    if (requestWasSuccessful(response)) {
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
      console.log("login success!!");
      navigate("/myAccount");
    } else {
      setSubmitRequest({
        error: true,
        submitted: true,
        errorMessage: response.response.data.message,
        isLoading: false,
      });
    }
  };

  return (
    <StyledForm onSubmit={onLoginSubmit}>
      <input type="email" name="email" value={email} onChange={onEmailChange} />
      <input type="password" value={password} onChange={onPasswordChange} />
      <button>Login</button>
      {!auth && <FormMessage>{submitRequest.errorMessage}</FormMessage>}
      {auth && submitRequest.submitted && <FormMessage>Logged In!</FormMessage>}
      {submitRequest.isLoading && (
        <p>
          <StyledLoadingAnimation
            loading={submitRequest.isLoading}
            size={11}
            color="#d2d2d2"
            speedMultiplier={4}
          />
        </p>
      )}
    </StyledForm>
  );
};

export default LoginForm;
