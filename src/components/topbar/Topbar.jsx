import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="logo">
            ReactBook
          </Link>
        </div>
        <div className="topRight">
          <Link to="/profile">
            <img
              src="assets/person/1.jpeg"
              alt="User"
              className="topbarProfileImg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
