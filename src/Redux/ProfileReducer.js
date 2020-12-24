const addPost = 'addPost';
const updatePostText = 'updatePostText';

const profileReducer = (state, action) => {
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