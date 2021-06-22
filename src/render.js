import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostSt} from './redux/state';
import {addMessageSt} from './redux/state';
import { BrowserRouter } from 'react-router-dom';



export let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            {/* like value of atributes we give objectName */}
            {/* addPostSt and addMessageSt there are without props. and without () becouse of they are called there by import
       and becouse they are callback functions */}
            <App state={state} addPostSt={addPostSt} addMessageSt={addMessageSt} />
        </BrowserRouter>, document.getElementById('root'));
}
