import React from "react";
import s from "./Dialogs.module.css";
// import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageChangeBodyCreator } from "../../Redux/state";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} source={d.source} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let addMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };
  
  let onMessageChange = (e) => {
    let text = e.target.value;
    let action = updateNewMessageChangeBodyCreator(text);
    props.store.dispatch(action);
  };
  
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            onChange={onMessageChange}
            placeholder='Enter your message...'
            value={newMessageBody}>  
          </textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add a new message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
