import React from 'react'
import {addNewMessageDispatch, updateMessageDispatch} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../index"
import {connect} from "react-redux";


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

let mapStateToProps = (state) => {
             return {
                 dialogsPage: state.dialogsPage
             }
};
let dispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (text) => {
            dispatch(updateMessageDispatch(text))
        },

        sendNewMessage: () => {
            dispatch(addNewMessageDispatch())
        }

    }
};

const DialogContainers = connect (mapStateToProps,dispatchToProps) (Dialogs);

export default DialogsContainer;