import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export const Auth = () => {
  return (
    <section className="d-flex flex-column justify-content-center">
      <button type="button" className="btn btn-primary mb-2">
        Login with Facebook <FaFacebook />
      </button>
      <button type="button" className="btn btn-danger">
        Login with Google <FaGoogle />
      </button>
    </section>
  );
};
