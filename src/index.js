import React from 'react';
import ReactDOM from 'react-dom';
// import App from 'containers/App/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reduxs/reducers/index';
import thunk from 'redux-thunk';
import HomePage from 'containers/HomePage/HomePage';

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <HomePage />
    </Provider>,
    document.querySelector('#root')
);
