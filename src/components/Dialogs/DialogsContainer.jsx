import React from "react";

import {
  sendMessageCreator,
  updateNewMessageChangeBodyCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  

  return (
    <StoreContext.Consumer>
      {(store) => {

let dialogsPage = store.getState().dialogsPage;

let onSendMessage = () => {
  store.dispatch(sendMessageCreator());
};

let onNewMessageChange = (text) => {
  store.dispatch(updateNewMessageChangeBodyCreator(text));
};

        return <Dialogs
          updateNewMessageBody={onNewMessageChange}
          sendMessage={onSendMessage}
          dialogsPage={dialogsPage}
        />;
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
