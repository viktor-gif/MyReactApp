import React, { Component, PureComponent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={"Post message"}
          validate={[required, maxLength10]}
        />
      </div>
      <div className={s.buttonAddPost}>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = React.memo((props) => {
  console.log("RENDER");
  let postsElements = [...props.posts]
    .reverse()
    .map((p) => (
      <Post
        message={p.message}
        key={p.id}
        id={p.id}
        likesCount={p.likesCount}
      />
    ));

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.MyPostsWrap}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
