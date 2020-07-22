import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostChangeActionCreator,
} from "../../../Redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  

  return (
    <StoreContext.Consumer> 
      
      { (store) => {

        let state = store.getState();

  let addPost = () => {
    // props.addPost();
    store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    // let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostChangeActionCreator(text);
    store.dispatch(action);
  };

        return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
        />;
      }
    }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
