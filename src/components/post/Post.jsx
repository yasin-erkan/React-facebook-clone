import React, { useState } from "react";
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.like);
  const [comments, setComments] = useState(post.comment);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  return (
    <div className="post">
      <div className="postTop">
        <img src={post.profilePicture} alt="user" className="postProfileImg" />
        <span className="postUsername">{post.username}</span>
      </div>
      <div className="postCenter">
        <span className="postDesc">{post.desc}</span>
        <img src={post.photo} alt="post" className="postImg" />
      </div>
      <div className="postBottom">
        <div className="postIcons">
          <FaHeart onClick={handleLike} className="postIcon" />
          <FaComment onClick={handleComment} className="postIcon" />
          <FaShareAlt className="postIcon" />
        </div>
        <span className="postLikeCounter">{likes} likes</span>
        <span className="postCommentCounter">{comments} comments</span>
      </div>
    </div>
  );
};

export default Post;
