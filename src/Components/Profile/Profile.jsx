import React from 'react'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost myPosts={props.profilePage.myPosts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    )
};
export default Profile