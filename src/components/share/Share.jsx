import React, { useState } from "react";
import { FaImage, FaVideo, FaTags, FaMapMarkerAlt } from "react-icons/fa";
import "./share.css";

const Share = () => {
  const [postText, setPostText] = useState("");

  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log("Post submitted:", postText);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="shareInput"
            value={postText}
            onChange={handleTextChange}
          />
        </div>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FaImage size={20} />
              <span>Photo/Video</span>
            </div>
            <div className="shareOption">
              <FaVideo size={20} />
              <span>Live Video</span>
            </div>
            <div className="shareOption">
              <FaTags size={20} />
              <span>Tag Friends</span>
            </div>
            <div className="shareOption">
              <FaMapMarkerAlt size={20} />
              <span>Check In</span>
            </div>
          </div>
          <button className="shareButton" onClick={handlePostSubmit}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
