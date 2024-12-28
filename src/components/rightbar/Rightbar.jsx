import React from "react";
import { Users } from "../../dummyData";
import "./rightbar.css";

const Rightbar = ({ users }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarTitle">Suggested Friends</div>
        <ul className="rightbarList">
          {users.slice(0, 5).map((user) => (
            <li key={user.id} className="rightbarListItem">
              <img
                src={user.profilePicture}
                alt={user.username}
                className="rightbarImg"
              />
              <span className="rightbarUsername">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
