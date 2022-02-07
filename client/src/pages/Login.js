import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export const Login = () => {
  const google = () => {
    window.open("http://localhost:3000/auth/google");
  };

  return (
    <div>
      <button type="button" className="btn btn-primary">
        Login with Facebook <FaFacebook />
      </button>
      <button type="button" className="btn btn-danger" onClick={google}>
        Login with Google <FaGoogle />
      </button>
    </div>
  );
};
