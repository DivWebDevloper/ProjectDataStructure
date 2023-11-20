import React from 'react'
import "./Post.css"

function Post({displayName, username,verified,text,image,avatar}) {
  return (
    <div className="post">
      <div className="postAvatar">
        {/* <Avatar></Avatar> */}
      </div>
      <div className="Postbody">
        <div className="postHeader">
            <div className="postHeaderText">
                <h3>Username <span>Verification</span></h3>
            </div>
            <div className="postHeaderDescription">
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
