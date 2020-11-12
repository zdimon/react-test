import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Login} from './Login';
import {User} from './User';


ReactDOM.render(
  <Login />,
  document.getElementById('login-form')
);

var users = document.querySelectorAll('.user');

console.log(users);

users.forEach((el,idx) => {
  ReactDOM.render(
    <User name='Dima' id={idx} />,
    el
  );
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
