import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { loginUser } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    loginUser(userData);
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={onSubmit}
          className="form-group p-5 d-flex flex-column justify-content-center"
        >
          {/* Username Input */}
          <div className="form-group pb-2">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              value={email}
              onChange={onChange}
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter email"
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-group pb-2">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={onChange}
              className="form-control form-control-lg"
              placeholder="Enter password"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center p-2">
            {/* <!-- Checkbox --> */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label className="form-check-label">Remember me</label>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Sign in
          </button>

          <div className="divider d-flex align-items-center my-2">
            <p className="text-center fw-bold mx-1 mb-0 text-muted">OR</p>
          </div>

          <button className="btn btn-primary btn-lg btn-block">
            Register here
          </button>
        </form>
      </div>
    </section>
  );
};
