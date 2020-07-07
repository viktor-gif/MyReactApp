import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {addPost, addMessage, updateNewPostText, updateNewMessageText} from "./Redux/state";
import { BrowserRouter } from "react-router-dom";


export let rerenderEntireTree = (state) => {

ReactDOM.render(
<BrowserRouter>
<App state={state} addPost={addPost} addMessage={addMessage}
    updateNewPostText={updateNewPostText}
    updateNewMessageText={updateNewMessageText} />
</BrowserRouter>, document.getElementById("root"));
}


