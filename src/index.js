import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './Component/App';
import './Index.css';
import movies from './reducers';

const store =createStore(movies);
console.log('state ',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);