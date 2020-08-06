import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostChangeActionCreator } from "../../../Redux/profile-reducer";




const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} id={p.id} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = updateNewPostChangeActionCreator(text);
    // props.dispatch(action);
  };
  
  return (
    <div className={s.MyPostsWrap}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          placeholder='Enter your post...'
        ></textarea>
      </div>
      <div className={s.buttonAddPost}>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
