import React from "react";
import s from "./Dialogs.module.css";
// import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageChangeBodyCreator } from "../../Redux/dialogs-reducer";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {

  let dialogsPage = props.dialogsPage;

  let dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} source={d.source} />
  ));

  let messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  
  if (!props.isAuth) return <Redirect to={'/login'} />;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
      <div className={s.messages}>
        {messagesElements}
        
      </div>
    </div>
  );
};

const addMessageForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
          <Field component='textarea' name='newMessageBody'
            placeholder='Enter your message...'/>
        </div>
        <div>
          <button>Add a new message</button>
        </div>
  </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm)



export default Dialogs;
