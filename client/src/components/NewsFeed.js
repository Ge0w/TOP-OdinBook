import React from "react";
import { NewMessage } from "./NewMessage";
import { Message } from "./Message";

export const NewsFeed = () => {
  return (
    <div>
      <NewMessage />
      <Message />
    </div>
  );
};
