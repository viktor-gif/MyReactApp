import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  
  let postData = [
    {id: 1, message: 'Hi, hw are you?', likesCount: 56},
    {id: 2, message: 'It\'s my first post', likesCount: 76},
    {id: 3, message: 'It\'s my second post', likesCount: 45}
    
  ]

  return (
    <div className={s.MyPostsWrap}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div className={s.buttonAddPost}>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post className={s.post} message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post className={s.post} message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post className={s.post} message={postData[2].message} likesCount={postData[2].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
