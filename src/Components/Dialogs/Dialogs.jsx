import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import MessagesItem from "./MessageItem/Message";



const Dialogs = (props) => {
 let state = props.dialogsPage;
    let addMessage = () => {
        props.sendNewMessage()
    };
    const updateMessage = (event) => {
        let text = event.target.value;
        props.updateMessageBody(text)
    };

    let dialogsElements = state.dialogs.map((el) => <DialogItem name={el.name} id={el.id}/>);
    let messageElements = state.messages.map((mess) => <MessagesItem id={mess.id} message={mess.message}/>);
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
            <div>
                <textarea onChange={updateMessage}
                          value={state.newMessage}>aa</textarea>
            </div>
            <div>
                <button onClick={addMessage}>отослать сообщение</button>
            </div>

        </div>
    )
};
export default Dialogs