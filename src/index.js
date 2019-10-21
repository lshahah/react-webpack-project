import React from 'react';
import ReactDOM from 'react-dom';
// import App from 'containers/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reduxs/reducers/index';
import HomePage from 'containers/HomePage/HomePage';

const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <HomePage />
    </Provider>,
    document.querySelector('#root')
);
