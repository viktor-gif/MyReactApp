import React from "react";
import s from "./Dialogs.module.css";
// import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageChangeBodyCreator } from "../../Redux/dialogs-reducer";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {

  let dialogsPage = props.dialogsPage;

  let dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} source={d.source} />
  ));

  let messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  let newMessageBody = dialogsPage.newMessageBody;

  let addMessage = () => {
    props.sendMessage();
  };
  
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageBody(text)
    // let action = updateNewMessageChangeBodyCreator(text);
    // props.store.dispatch(action);
  };
  if (!props.isAuth) return <Redirect to={'/login'} />;

  
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
