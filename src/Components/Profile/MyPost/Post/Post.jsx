import React from 'react'
import styles from './Post.module.css'


const Post = (props) => {
    return (
        <div className={styles.content}>
             <div>
                <div className={styles.avatar}>
                    <img src="https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg" alt=""/>
                    <div>{props.message} </div>
                    <span> like{props.likeCount}</span>
                </div>

            </div>
        </div>
    )
};
export default Post