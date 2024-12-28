import React from "react";
import { Posts } from "../../dummyData";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className="feed">
      {Posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
