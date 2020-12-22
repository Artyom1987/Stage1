import React from 'react'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost myPosts={props.profilePage.myPosts} addPost={props.addPost}
                    addPostText={props.profilePage.newPostText}
                    updatePostText={props.updatePostText}/>
        </div>
    )
};
export default Profile