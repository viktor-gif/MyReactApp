import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {

  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Klim'},
    {id: 2, name: 'Vorobey'},
    {id: 3, name: 'Kit Semen'},
    {id: 4, name: 'Shumak'},
    {id: 5, name: 'Igoriok'},
    {id: 6, name: 'Yarik'},
  ]

  let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Everything is cool!'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ]

  let dialogsElements = dialogs
    .map( d => <DialogItem name={d.name} id={d.id} /> );

  let messagesElements = messages
    .map( m => <Message message={m.message} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>

      { dialogsElements }

      </div>

      <div className={s.messages}>

        { messagesElements }

      </div>
    </div>
  );
};

export default Dialogs;
