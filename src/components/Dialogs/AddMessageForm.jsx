import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControl/FormsControl"

const maxLength10 = maxLengthCreator(10);

const addMessageForm = (props) => {

  

    return <form onSubmit={props.handleSubmit}>
      <div>
            <Field component={Textarea} name='newMessageBody'
              validate={[required, maxLength10]} placeholder='Enter your message...'/>
          </div>
          <div>
            <button>Add a new message</button>
          </div>
    </form>
  }
  
  const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm)

  export default AddMessageFormRedux;