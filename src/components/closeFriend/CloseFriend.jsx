import React from "react";
import "./closefriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img
        src={user.profilePicture}
        alt={`${user.username}'s profile`}
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
