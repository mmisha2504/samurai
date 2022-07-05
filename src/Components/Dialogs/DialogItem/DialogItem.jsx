import React from "react";
import s from "./../Dialogs.module.css";
import { Link } from "react-router-dom";

const DialogItem = (props)=> {
    let path = '/dialogs/'+ props.id;
    return (
    <div className={s.item + " "+ s.active}>
        <Link to={path}>
            <img src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-smajl-v-zelyonoj-kepke.jpg" alt="avatar" />
            {props.name}</Link>
    </div>)
}



export default DialogItem;