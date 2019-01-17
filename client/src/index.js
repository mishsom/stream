import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import Reducers from './reducers';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(Reducers, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);