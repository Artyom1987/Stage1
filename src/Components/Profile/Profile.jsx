import React from 'react'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
    debugger
    return (
        <div >
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </div>
    )
};
export default Profile