import React from "react";

export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
      <h2 className="text-center">{props.title}</h2>
      <button className="btn btn-secondary nav-item">Logout</button>
    </nav>
  );
};
