import React, { useContext } from "react";
import { FriendIcon } from "./FriendIcon";
import { GlobalContext } from "../../context/GlobalState";

export const FriendList = () => {
  const { friends } = useContext(GlobalContext);

  return (
    <div className="friends-list">
      <ul className="list-group list-group-flush">
        {friends.map((friend) => (
          <FriendIcon key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
};
