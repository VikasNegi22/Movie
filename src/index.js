import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './Component/App';
import './Index.css';
import rootReducer from './reducers';

// logger is used to console action type.
// curried function logger(obj,next,action)
//redux internally do  logger(obj)(next)(action)

// const logger =function ({dispatch,getState}){
//    return function(next){
//      return function(action){
//       //  middleware code
//       console.log('ACTION_TYPE=',action.type);
//       next(action);
//      }
//    }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // logger code
  if (typeof action !== 'function') {
    console.log('ACTION_TYPE= ', action.type);
  }
  next(action);

}

// const thunk =({dispatch,getState})=>(next)=>(action)=>{
//   // thunk code
//    if(typeof action === 'function'){
//       action(dispatch);
//       return;
//    }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log('Before State ',store.getState());

export const StoreContext = createContext();
console.log('StoreContext', StoreContext);

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>;
  }
}

// UPDATE STORE BY DISPATCHING ACTIONS
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Bhaubali'},{name:'Mahabhart'}]
// });

// console.log('After State ',store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);