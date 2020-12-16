import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import MessagesItem from "./MessageItem/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((el) => <DialogItem name={el.name} id={el.id}/>);
    let messageElements = props.messages.map((mess) => <MessagesItem message={mess.message} likecount={mess.likecount}/>);
    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}

                    {/*<DialogItem name="Stark" id="5"/>*/}

                </div>
                <div className={styles.messages}>
                    {messageElements}

                    {/*<MessagesItem message="Mark 21 is ready" likecount="50"/>*/}

                </div>
            </div>


        </div>
    )
};
export default Dialogs