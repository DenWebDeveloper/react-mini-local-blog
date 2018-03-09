import React from 'react'
import {render} from "react-dom";
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './components';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('articles')
);