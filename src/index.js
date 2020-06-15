import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 56 },
  { id: 2, message: "It's my first post", likesCount: 76 },
  { id: 3, message: "It's my second post", likesCount: 45 },
];

let dialogs = [
  { id: 1, name: "Klim" },
  { id: 2, name: "Vorobey" },
  { id: 3, name: "Kit Semen" },
  { id: 4, name: "Shumak" },
  { id: 5, name: "Igoriok" },
  { id: 6, name: "Yarik" },
];

let messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Everything is cool!" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
