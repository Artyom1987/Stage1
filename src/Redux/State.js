import {renderTree} from "../Render";

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Ylia"},
            {id: 2, name: "Artyom"},
            {id: 3, name: "JJ"},
            {id: 4, name: "Monk"},
            {id: 5, name: "Stark"},
        ],
        messages: [
            {id: 1, message: "Hello man"},
            {id: 2, message: "Hello my pussy"},
            {id: 3, message: "You win"},
            {id: 4, message: "Beach so good"},
            {id: 5, message: "Mark 21 is ready"},
        ]
    },
    profilePage: {
        myPosts: [
            {id: 1, message: "Hi Hello", likeCount: "1"},
            {id: 2, message: "JUJU", likeCount: "55"},
            {id: 3, message: "Beach so good", likeCount: "77"},
        ]
    },
    sideBar:{},
};

export let addPost = (postMessage) => {
       let addElement =
        {id:1, message: postMessage, likeCount: "1"};
        state.profilePage.myPosts.push(addElement);
    renderTree(state);


};



export default state;