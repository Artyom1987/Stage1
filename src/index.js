import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dialogs = [
    {id: 1, name: "Ylia"},
    {id: 2, name: "Artyom"},
    {id: 3, name: "JJ"},
    {id: 4, name: "Monk"},
    {id: 5, name: "Stark"},
];
let messages = [
    {id: 1, message: "Hello man"},
    {id: 2, message: "Hello my pussy"},
    {id: 3, message: "You win"},
    {id: 4, message: "Beach so good"},
    {id: 5, message: "Mark 21 is ready"},
];
let myPosts =[
    {id: 1 , message:"Hi Hello", likeCount:"1"},
    {id: 2 , message:"JUJU",likeCount:"55"},
    {id: 3 , message:"Beach so good",likeCount:"77"},
];
ReactDOM.render(
  <React.StrictMode>

    <App  dialogs={dialogs} messages={messages} myPosts={myPosts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
