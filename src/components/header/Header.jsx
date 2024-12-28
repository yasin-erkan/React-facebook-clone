import React from "react";
import { FaSearch } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">SocialBilge</div>
      <div className="search">
        <FaSearch className="searchIcon" />
        <input type="text" placeholder="Search" className="searchInput" />
      </div>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/">Profile</a>
        <a href="/">Notifications</a>
        <a href="/">Messages</a>
      </div>
    </div>
  );
};

export default Header;
