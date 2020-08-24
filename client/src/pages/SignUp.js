import React from "react";
import { Box, Grommet } from "grommet";
import SignUpForm from "../components/SignUpForm/signUpForm";

function SignUp() {
  return (
  <div className="formDiv m-5">
    <h2>Sign Up</h2>
    <div>
    <SignUpForm></SignUpForm>
    </div>
  </div>
  );
}

export default SignUp;
