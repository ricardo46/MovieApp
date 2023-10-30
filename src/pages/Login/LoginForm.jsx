import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { logUserInAPI } from "../../utils/apiUtils";
import { StyledLoadingAnimation } from "../../components/Animations";
import { StyledForm } from "../../components/moviesComponent/SearchMoviesFormStyledComponents";
import { FormMessage } from "../../components/StyledComponents";
import { setLocalStorageItem } from "../../utils/localStorageUtils";

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
    try {
      const response = await logUserInAPI(email, password);
      // console.log('login',response.data.user)
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
      console.log("login success!!");
      navigate("/myAccount");
    } catch (err) {
      console.log("err", err);
      setSubmitRequest({
        error: true,
        submitted: true,
        // errorMessage: err.response.data.message,
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
