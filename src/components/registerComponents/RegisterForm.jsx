import axios from "axios";
import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRegisterSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitRequest({
        isLoading: true,
      });
      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:E95hPK0b/auth/signup",
        { name, email, password } //pass: aaa111222
      ); //enviar o payload (nome email password).
      // Endpoint link: ir buscar ao Xano, POST /auth/signup
      // response vai ser um token do Xano
      setSubmitRequest({
        error: false,
        submitted: true,
        isLoading: false,
      });
      // register request
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

  return (
    <form onSubmit={onRegisterSubmit}>
      <input required value={name} onChange={onNameChange} />
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        required
        value={password}
        onChange={onPasswordChange}
      />
      <button>Register</button>
      {submitRequest.error && <p>{submitRequest.errorMessage}</p>}
      {!submitRequest.error && submitRequest.submitted && (
        <p>Account created</p>
      )}
      {submitRequest.isLoading && <p>Loading...</p>}
    </form>
  );
};

export default RegisterForm;
