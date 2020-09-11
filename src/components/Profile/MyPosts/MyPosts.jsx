import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const AddNewPostForm = (props) => {

  return (
  <form onSubmit={props.handleSubmit}>
    <div>
        <Field component='textarea' name='newPostText' placeholder='Enter your post...'></Field>
      </div>
      <div className={s.buttonAddPost}>
        <button>Add post</button>
      </div>
  </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)


const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} id={p.id} likesCount={p.likesCount} />
  ));

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
  
  return (
    <div className={s.MyPostsWrap}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
