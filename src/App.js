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

                    <Route path='/Profile' render={()=> <Profile myPosts={props.myPosts}/>  } />
                    <Route path='/Dialogs' render={()=>< Dialogs dialogs={props.dialogs} messages={props.messages}/> } />

                </div>
            </div>
        </BrowserRouter>


    )
};

export default App;
