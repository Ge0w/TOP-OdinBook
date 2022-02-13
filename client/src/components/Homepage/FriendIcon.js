import React from "react";
import profile from "../../assets/images/profile.jpeg";

export const FriendIcon = ({ friend }) => {
  return (
    <li className="list-group-item">
      <img src={profile} alt="profile"></img>
      {friend.user}
    </li>
  );
};
