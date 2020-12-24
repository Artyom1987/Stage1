const addNewMessage = 'addNewMessage';
const updateMessage = 'updateMessage';

const dialogsReducers = (state ,action) => {
          switch (action.type) {
              case addNewMessage :
                  let addElement = state.newMessage;
                  state.messages.push({ id: 7, message: addElement});
                  state.newMessage = "";
                  return state;
              case updateMessage :
                  state.newMessage = action.newMessage;
                  return state;
              default:
                  return state;
          }


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



export default dialogsReducers;