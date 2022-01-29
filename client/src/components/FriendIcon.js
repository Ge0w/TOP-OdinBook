import React from "react";
import profile from "../assets/images/profile.jpeg";

export const FriendIcon = () => {
  return (
    <div>
      <li className="list-group-item">
        <img src={profile} alt="profile"></img>Friends Name
      </li>
    </div>
  );
};
