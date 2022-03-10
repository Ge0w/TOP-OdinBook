import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { toast } from "react-toastify";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { addUser } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      addUser(userData);
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={onSubmit}
          className="form-group p-5 d-flex flex-column justify-content-center"
        >
          {/* Email Input */}
          <div className="form-group pb-2">
            <label className="form-label" htmlFor="username">
              Email
            </label>
            <input
              name="email"
              value={email}
              onChange={onChange}
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Email"
            />
          </div>
          {/* Name Input */}
          <div className="form-group pb-2">
            <label className="form-label" htmlFor="username">
              Name
            </label>
            <input
              name="name"
              value={name}
              onChange={onChange}
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
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
              placeholder="Enter Password"
            />
          </div>

          {/* <!-- Password input check --> */}
          <div className="form-group pb-2">
            <label className="form-label" htmlFor="password">
              Re-enter Password
            </label>
            <input
              name="password2"
              type="password"
              value={password2}
              onChange={onChange}
              className="form-control form-control-lg"
              placeholder="Re-enter Password"
            />
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};
