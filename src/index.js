import React from 'react'
import {render} from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,)

render(
    <Provider store={}>
        <App/>
    </Provider>
    , document.getElementById('articles')
);