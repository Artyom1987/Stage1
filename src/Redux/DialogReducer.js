const addNewMessage = 'addNewMessage';
const updateMessage = 'updateMessage';
 let initialState ={
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
 };

const dialogsReducers = (state = initialState ,action) => {
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