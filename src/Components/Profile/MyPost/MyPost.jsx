import React from 'react'
import styles from './MyPost.module.css'
import Post from "./Post/Post";



const MyPost = (props) => {

    let newPostElement = React.createRef();
let addPost = ()=> {
    props.addPost();

};
let changePostElement = () =>{
    let text = newPostElement.current.value;
    props.updatePostText(text) ;

};
      const postElemnts = props.myPosts.map((el)=> <Post message={el.message} likeCount={el.likeCount}/>);
    return (
        <div className={styles.content}>
            <div className={styles.postPic}>
                <img src="https://archilab.online/images/1/123.jpg" alt=""/></div>
            Post
            <div className={styles.areaStyle}>
                <textarea onChange={changePostElement} ref={newPostElement} value={props.addPostText} >add text</textarea>
            </div>
            <div className={styles.buttonStyle}>
                <button onClick={addPost}>add text</button>
            </div>
            {postElemnts}

            {/*<Post message="Beach so good"  likeCount="77"/>*/}

        </div>
    )
};
export default MyPost