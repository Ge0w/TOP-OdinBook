import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Routes, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </GlobalProvider>
    );
  }
}

export default App;
