import React from 'react';
import ReactDOM from 'react-dom';
import 'tinper-bee/assets/tinper-bee.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reduxs/reducers/index';
import thunk from 'redux-thunk';
import HomePage from 'containers/HomePage/HomePage';
// import './index.scss';

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <HomePage />
    </Provider>,
    document.querySelector('#root')
);
