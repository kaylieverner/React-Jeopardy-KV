import React from "react";
import { Box, Grommet } from "grommet";
import SignUpForm from "../components/SignUpForm/signUpForm";
import LoginForm from "../components/LoginForm/loginForm";
import "./style.css"

function Login() {
  return (
    <div className="formDiv m-5">
      <h2>Login</h2>
      <div>
      <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default Login;
