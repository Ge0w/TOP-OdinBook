import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  //Get Messages
  async function getMessages() {
    try {
      const res = await axios.get("/api/messages");

      dispatch({
        type: "GET_MESSAGES",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  // Add Message
  async function addMessage(message) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/messages", message, config);

      dispatch({
        type: "ADD_MESSAGE",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  //Get Users
  async function getUsers() {
    try {
      const res = await axios.get("/api/users");

      dispatch({
        type: "GET_USERS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  //Login user
  async function loginUser(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users/login", user, config);

      dispatch({
        type: "LOGIN_USER",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  // Add User
  async function addUser(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", user, config);

      dispatch({
        type: "ADD_USER",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        messages: state.messages,
        error: state.error,
        loading: state.loading,
        getMessages,
        friends: state.friends,
        addMessage,
        getUsers,
        addUser,
        loginUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
