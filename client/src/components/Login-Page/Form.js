import React, { useState } from "react";

export const Form = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center">
        <form
          action="/login"
          method="POST"
          className="p-5 d-flex flex-column justify-content-center"
        >
          {/* Username Input */}
          <div className="form-group pb-2">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              name="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Username"
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
              onChange={(e) => setPassword(e.target.value)}
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
              <label className="form-check-label" htmlFor="form1Example3">
                Remember me
              </label>
            </div>
            <button>Forgot password?</button>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Sign in
          </button>

          <div className="divider d-flex align-items-center my-2">
            <p className="text-center fw-bold mx-1 mb-0 text-muted">OR</p>
          </div>

          <button className="btn btn-primary btn-lg btn-block" role="button">
            Register here
          </button>
        </form>
      </div>
    </section>
  );
};
