import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './Component/App';
import './Index.css';
import rootReducer from './reducers';


const store =createStore(rootReducer);
// console.log('Before State ',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Bhaubali'},{name:'Mahabhart'}]
// });

// console.log('After State ',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);