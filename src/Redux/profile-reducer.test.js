import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 56 },
    { id: 2, message: "It's my first post", likesCount: 76 },
    { id: 3, message: "It's my second post", likesCount: 45 },
  ],
};

it("length of posts should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");
  // 2. action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.length).toBe(4);
  expect(newState.posts[3].message).toBe("It's my second post");
});

it("message of new posts should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");
  // 2. action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts[3].message).toBe("It's my second post");
});

it("after deleting length of messages should be decrement", () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.length).toBe(2);
});

it("after deleting length of messages shouldn't be decrement if id is incorrect", () => {
  // 1. test data
  let action = deletePost(1000);
  // 2. action
  let newState = profileReducer(state, action);
  //3.expectation
  expect(newState.posts.length).toBe(3);
});
