import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} source={d.source} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  let val = props.dialogsPage.newMessageText;
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            ref={newMessageElement}
            onChange={onMessageChange}
            value={val}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add a new message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
