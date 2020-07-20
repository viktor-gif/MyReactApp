import React from "react";

import { sendMessageCreator, updateNewMessageChangeBodyCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let dialogsPage = props.store.getState().dialogsPage;

  

  let onSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };
  
  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageChangeBodyCreator(text));
  };
  
  
  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessage}
      dialogsPage={dialogsPage} />
  );
};

export default DialogsContainer;
