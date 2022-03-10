import React from "react";
import { Form } from "../components/Forms/LoginForm";
import { Auth } from "../components/Login-Page/Auth";

export const Login = () => {
  return (
    <div className="login d-flex justify-content-around min-vh-100">
      <Auth />
      <div className="page-break"></div>
      <Form />
    </div>
  );
};
