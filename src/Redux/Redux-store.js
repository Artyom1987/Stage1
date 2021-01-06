import {combineReducers, createStore} from "redux";
import dialogsReducers from "./DialogReducer";
import profileReducer from "./ProfileReducer";

let reducers = combineReducers({
    dialogsPage:dialogsReducers,
    profilePage:profileReducer,
});

let store = createStore(reducers);

export default store;