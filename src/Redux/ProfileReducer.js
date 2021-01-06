const addPost = 'addPost';
const updatePostText = 'updatePostText';
 let initialState = {
     myPosts: [
         {id: 1, message: "Hi Hello", likeCount: "1"},
         {id: 2, message: "JUJU", likeCount: "55"},
         {id: 3, message: "Beach so good", likeCount: "77"},
     ],
     newPostText: ''
 };

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
        case addPost :
            let addElement =
                {id: 1, message: state.newPostText, likeCount: "1"};
            state.myPosts.push(addElement);
            state.newPostText = "";
            return state;
            case updatePostText:
                state.newPostText = action.newText;
                return state;
            default :
                return state;
    }

    };

export const addPostCreateDispatch = () => {
    return {type: 'addPost'}
};
export const changePostElementCreateDispatch = (text) => {
    return {
        type: 'updatePostText',
        newText: text,
    }
};

export default profileReducer;