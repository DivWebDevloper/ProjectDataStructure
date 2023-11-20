import React from "react";
import "./Feed.css";
import TweetBox from "../Tweet/TweetBox";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="Feed">
      <div className="FeedHeader">
        <h2>Feed</h2>
      </div>
      <TweetBox/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}

export default Feed;
