import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  messages: [],
  friends: [
    { id: 1, user: "trinsith" },
    { id: 2, user: "cold blooded mofo" },
    { id: 3, user: "green gian11" },
  ],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
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

  return (
    <GlobalContext.Provider
      value={{
        messages: state.messages,
        error: state.error,
        loading: state.loading,
        getMessages,
        friends: state.friends,
        addMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
