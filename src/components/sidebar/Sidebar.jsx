import React from "react";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <h4 className="sidebarTitle">Friends</h4>
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
