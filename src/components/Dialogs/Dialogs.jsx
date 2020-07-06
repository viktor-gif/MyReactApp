import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  

  let dialogsElements = props.state.dialogs
    .map( d => <DialogItem name={d.name} id={d.id} source={d.source} /> );

  let messagesElements = props.state.messages
    .map( m => <Message message={m.message} /> );

  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    props.addMessage(text);
    newMessage.current.value = "";
  };

  return (
    
    <div className={s.dialogs}>
  
      <div className={s.dialogs__items}>

      { dialogsElements }

      </div>

      <div className={s.messages}>

        { messagesElements }
        <textArea ref={newMessage}></textArea>
        <button onClick={addMessage}>Add a new message</button>


      </div>
    </div>
  );
};

export default Dialogs;
