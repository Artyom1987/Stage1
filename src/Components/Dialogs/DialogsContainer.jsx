import React from 'react'
import {addNewMessageDispatch, updateMessageDispatch} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addNewMessageDispatch())
    };
    const updateMessage = (text) => {
        props.store.dispatch(updateMessageDispatch(text))
    };

    return (
        <Dialogs updateMessageBody={updateMessage} sendNewMessage={addMessage} dialogsPage={state}
                 />
            )
};
export default DialogsContainer