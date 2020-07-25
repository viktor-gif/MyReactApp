import React from "react";

import {
  sendMessageCreator,
  updateNewMessageChangeBodyCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageChangeBodyCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
