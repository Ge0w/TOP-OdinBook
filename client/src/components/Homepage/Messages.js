import React, { useContext } from "react";
import { Message } from "./Message";
import { GlobalContext } from "../../context/GlobalState";

export const Messages = () => {
  const { messages } = useContext(GlobalContext);

  return (
    <div className="container">
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};
