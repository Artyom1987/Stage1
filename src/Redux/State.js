const addPost = 'addPost';
const updatePostText = 'updatePostText';
const addNewMessage = 'addNewMessage';
const updateMessage = 'updateMessage';

let store = {
    _state: {
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
            ],
            newMessage: ''
        },
        profilePage: {
            myPosts: [
                {id: 1, message: "Hi Hello", likeCount: "1"},
                {id: 2, message: "JUJU", likeCount: "55"},
                {id: 3, message: "Beach so good", likeCount: "77"},
            ],
            newPostText: ''
        },
        sideBar: {},
    },
    _renderTree() {
    },
    getState() {
        return this._state;
    },
    // addPost() {
    //     let addElement =
    //         {id: 1, message: this._state.profilePage.newPostText, likeCount: "1"};
    //     this._state.profilePage.myPosts.push(addElement);
    //     this._state.profilePage.newPostText = "";
    //     this._renderTree(this._state);
    // },
    // updatePostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._renderTree(this._state);
    // },
    //


    subscribe(observer) {
        this._renderTree = observer;
    },
    dispatch(action) {
        if (action.type === addPost) {
            let addElement =
                {id: 1, message: this._state.profilePage.newPostText, likeCount: "1"};
            this._state.profilePage.myPosts.push(addElement);
            this._state.profilePage.newPostText = "";
            this._renderTree(this._state);
        } else if (action.type === updatePostText) {
            this._state.profilePage.newPostText = action.newText;
            this._renderTree(this._state);
        } else if (action.type === addNewMessage) {
            let addElement = this._state.dialogsPage.newMessage;
            this._state.dialogsPage.messages.push({ id: 7, message: addElement});
            this._state.dialogsPage.newMessage = "";
            this._renderTree(this._state);
        } else if (action.type === updateMessage) {
            this._state.dialogsPage.newMessage = action.newMessage;
            this._renderTree(this._state)
        }
    },
};
export const addNewMessageDispatch = () => {
    return {type: 'addNewMessage'}
};
export const updateMessageDispatch = (body) => {
    return {
        type: 'updateMessage',
        newMessage: body,
    }
};


export const addPostCreateDispatch = () => {

    return {
        type: 'addPost'
    }
};

export const changePostElementCreateDispatch = (text) => {
    return {
        type: 'updatePostText',
        newText: text,
    }
};

export default store;