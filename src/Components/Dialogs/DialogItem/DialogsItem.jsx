import React from 'react'
import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <div>
                <NavLink to={path} className={styles.item}>{props.name}</NavLink>
            </div>



        </div>
    )
};
export default DialogItem