import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import appReducer from './reducer';  //userReducer
import thunk from 'redux-thunk';

const store = createStore(
    appReducer,                     //userReducer
    applyMiddleware(thunk)
);


export default store;