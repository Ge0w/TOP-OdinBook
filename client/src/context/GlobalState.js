import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Initial state
const initialState = {
  messages: [
    { id: 1, message: "hey there", user: "cold blooded mofo" },
    { id: 2, message: "hey you", user: "trinsith" },
    { id: 3, message: "what's good", user: "green gian11" },
  ],
  friends: [
    { id: 1, user: "trinsith" },
    { id: 2, user: "cold blooded mofo" },
    { id: 3, user: "green gian11" },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function addMessage(message) {
    dispatch({
      type: "ADD_MESSAGE",
      payload: message,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ messages: state.messages, friends: state.friends, addMessage }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
