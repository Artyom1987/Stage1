import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import MessagesItem from "./MessageItem/Message";


const Dialogs = (props) => {
  let newMessageElement = React.createRef();
    let addMessage = () => {
        let messageArea = newMessageElement.current.value;
        alert(messageArea)

  };

    let dialogsElements = props.state.dialogs.map((el) => <DialogItem name={el.name} id={el.id}/>);
    let messageElements = props.state.messages.map((mess) => <MessagesItem message={mess.message}
                                                                           likecount={mess.likecount}/>);
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
                <textarea ref={newMessageElement}>ведите текст</textarea>
            </div>
            <div>
                <button onClick={addMessage}>отослать сообщение</button>
            </div>

        </div>
    )
};
export default Dialogs