import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm } from "redux-form";
import { Textarea } from '../common/Forms Controls/FormsControls';
import { required} from '../../Utils/validators/validators';
import { maxLengthCreator } from "../../Utils/validators/validators";
import { Navigate } from "react-router-dom";


const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit} >
       <div>
          <Field 
          component={Textarea}
          validate={[required, maxLength50] }
          placeholder={"Enter your message"} 
          name={"newMessageBody"} 
          />
       </div>
       <div>
          <button>SEND</button>
       </div>
    </form>
    )
 };

const Dialogs = (props)=>{
    let state= props.dialogsPage;

    let dialogsElements = state.dialogs.map (d => <DialogItem name = {d.name} key={d.id} id = {d.id}/> );
    let messageElements = state.messages.map (m => <Message message = {m.message} key={m.id} id = {m.id}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody)
    }
    if (props.isAuth == false) {
        return <Navigate to={'/login'}/>
    }

    return (
    <div className={s.dialogs}>
        <div className={s.dialogItems}>
             { dialogsElements }
        </div> 
         <div className={s.messages}>
            <div> { messageElements }</div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
             </div>
    </div>)

}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;