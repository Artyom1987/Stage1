import React from 'react'
import styles from './Profileinfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.imstart}>
                <img src='https://theinpaint.com/images/example-1-2.jpg' alt=""/>
            </div>

            <div className={styles.discriptonStyle}>
                discription
            </div>
        </div>
    )
};
export default ProfileInfo