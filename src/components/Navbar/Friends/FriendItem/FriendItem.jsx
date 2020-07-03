import React from "react";
import s from "./FriendItem.module.css";
import { NavLink } from "react-router-dom";

const FriendItem = (props) => {

  let path = "/friends/" + props.id;

  return (
    
        <div className={s.friendItem}>
          <NavLink className={s.navLink} to={path}>
          <img className={s.friend__img} src={props.image} />
          <span>{props.fullName}</span>
          </NavLink>
        </div>
        
  )
};

export default FriendItem;
