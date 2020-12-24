import dialogsReducers from "./DialogReducer";
import profileReducer from "./ProfileReducer";


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

        this._state.dialogsPage = dialogsReducers(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._renderTree(this._state)

    },

};

export default store;