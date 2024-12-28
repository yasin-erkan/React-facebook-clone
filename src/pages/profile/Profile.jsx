import React from "react";
import { Users, Posts } from "../../dummyData";
import Feed from "../../components/feed/Feed";
import "./profile.css";

const Profile = () => {
  const user = Users[0];

  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTop">
          <img
            src={user.profilePicture}
            alt="Profile cover"
            className="profileCoverImg"
          />
          <img
            src={user.profilePicture}
            alt="Profile avatar"
            className="profileUserImg"
          />
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">{user.username}</h4>
          <span className="profileInfoDesc">Welcome to my profile!</span>
        </div>
        <Feed posts={Posts.filter((post) => post.userId === user.id)} />
      </div>
    </div>
  );
};

export default Profile;
