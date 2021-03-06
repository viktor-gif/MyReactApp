import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
// import Message from "./../Message/Message";

const DialogItem = (props) => {


  let path = "/dialogs/" + (props.id + 2);

  

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink className={s.dialogNavLink} to={path}><img className={s.dialog__img} src={props.source} /><span>{props.name}</span></NavLink>
      <div className={s.dialog}>{props.message}</div>
    
    </div>
  );
};


export default DialogItem;
