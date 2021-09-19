//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
import reportWebVitals from './reportWebVitals';
//import {rerenderTree} from "./render";
import store from './redux/state';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export let rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/* like value of atributes we give objectName */}
            {/* addPostSt and addMessageSt there are without props. and without () becouse of they are called there by import
       and becouse they are callback functions */}
            <App state={store.getState()}
                 addPostSt={store.addPostSt.bind(store)}
                 addMessageSt={store.addMessageSt.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}



rerenderTree(store.getState());
store.subscribe(rerenderTree); //callback

reportWebVitals();


