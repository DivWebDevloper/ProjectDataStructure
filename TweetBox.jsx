import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="TweetBox">
      <form action="">
        <div className="TweetBoxInput">
          {/* <Avatar/> */}
          <input placeholder="Write Here" />
        </div>
        <button className="tweetboxTweetButton">Tweet</button>
      </form>
    </div>
  );
}

export default TweetBox;
