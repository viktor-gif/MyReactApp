import React from "react";
import MyPosts from "./MyPosts"
import { addPostActionCreator, updateNewPostChangeActionCreator } from "../../../Redux/profile-reducer";




const MyPostsContainer = (props) => {
  
  let state = props.store.getState();

  let addPost = () => {
    // props.addPost();
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    // let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostChangeActionCreator(text);
    props.store.dispatch(action);
  };
  
  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost} 
    posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
  );
};

export default MyPostsContainer;
