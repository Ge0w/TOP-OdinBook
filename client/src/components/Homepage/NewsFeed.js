import React from "react";
import { NewMessage } from "./NewMessage";
import { Messages } from "./Messages";

export const NewsFeed = () => {
  return (
    <>
      <NewMessage />
      <Messages />
    </>
  );
};
