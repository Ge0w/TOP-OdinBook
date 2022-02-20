import React, { useContext, useEffect } from "react";
import { Message } from "./Message";
import { GlobalContext } from "../../context/GlobalState";

export const Messages = () => {
  const { messages, getMessages } = useContext(GlobalContext);

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};
