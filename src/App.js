import React from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <Route path='/Profile' render={()=> <Profile state={props.state.profilePage}/> } />

                    <Route path='/Dialogs' render={()=>< Dialogs state={props.state.dialogsPage}/> } />

                </div>
            </div>
        </BrowserRouter>


    )
};

export default App;
