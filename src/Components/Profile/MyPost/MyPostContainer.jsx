import React from 'react'
import {addPostCreateDispatch, changePostElementCreateDispatch} from "../../../Redux/ProfileReducer";
import MyPost from "./MyPost";


const MyPostContainer = (props) => {
    debugger
 let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostCreateDispatch())

    };
    let onPostChangePostElement = (text) => {
        props.store.dispatch(changePostElementCreateDispatch(text))
    };

    return (

        <MyPost addPost={addPost} updatePostText={onPostChangePostElement} myPosts={state.profilePage.myPosts}
                newPostText={state.profilePage.newPostText}
                />)
};
export default MyPostContainer