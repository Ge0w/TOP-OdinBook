import React from "react";
import { FriendIcon } from "./FriendIcon";

export const FriendList = () => {
  return (
    <div className="friends-list">
      <ul className="list-group list-group-flush">
        <FriendIcon />
      </ul>
    </div>
  );
};
