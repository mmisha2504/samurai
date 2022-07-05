import React from "react";

import s from "./../Dialogs.module.css";

// let messageElements = messages.map (m => <Message message = {m.message} id = {m.id}/>);


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export default Message;