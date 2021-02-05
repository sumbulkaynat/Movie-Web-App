import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// function logger(obj, next, action)
const logger = function ({dispatch, getState }){
  return function (next) {
    return function (action) {
      //middleware code
      console.log('ACTION_TYPE = ', action.type);
      next(action);
    }
  }
}

const store = createStore (rootReducer, applyMiddleware(logger));
console.log('store', store);
// console.log('before state', store.getState());

// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{ name : 'Superman'}]
// });

// console.log('after state', store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

