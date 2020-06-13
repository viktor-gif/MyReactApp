import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>

      <div className={s.ialogs__items}>
          <div className={s.dialog + ' ' + s.active}>
            <NavLink to="/dialogs/1">Klim</NavLink>
          </div>
          <div className={s.dialog}>
          <NavLink to="/dialogs/2">Vorobey</NavLink>
          </div>
          <div className={s.dialog}>
          <NavLink to="/dialogs/3">Shumak</NavLink>
          </div>
          <div className={s.dialog}>
          <NavLink to="/dialogs/4">Kit Semen</NavLink>
          </div>
          <div className={s.dialog}>
          <NavLink to="/dialogs/5">Igoriok</NavLink>
          </div>
          <div className={s.dialog}>
          <NavLink to="/dialogs/6">Yarik</NavLink>
          </div>
      </div>

        <div className={s.messages}>
          <div className={s.message}>
            Hello!
          </div>
          <div className={s.message}>
            How are you?
          </div>
          <div className={s.message}>
            Everything is cool!
          </div>
      </div>
      
    </div>
  );
};

export default Dialogs;
