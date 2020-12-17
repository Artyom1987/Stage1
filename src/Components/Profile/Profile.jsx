import React from 'react'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost myPosts={props.state.myPosts} addPost={props.addPost}/>
        </div>
    )
};
export default Profile