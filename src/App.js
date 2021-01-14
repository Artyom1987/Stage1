import React from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import { Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";




const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>

                <Route path='/Profile' render={() => <Profile store={props.store}  />}/>

                <Route path='/Dialogs' render={() => <DialogsContainer store={props.store}  dispatch={props.dispatch} />}/>

            </div>
        </div>

    )
};

export default App;
