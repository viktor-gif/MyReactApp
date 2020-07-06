import React from "react";
import s from "./Message.module.css";
import { NavLink } from "react-router-dom";

const Message = (props) => {

  return (
    <div className={s.message}>{props.message}</div>
  );
};




export default Message;
