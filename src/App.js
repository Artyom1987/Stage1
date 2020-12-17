import React from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route} from "react-router-dom";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Route path='/Profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>

                <Route path='/Dialogs' render={() => < Dialogs state={props.state.dialogsPage}/>}/>

            </div>
        </div>

    )
};

export default App;
