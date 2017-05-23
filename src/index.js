import "file-loader?name=index.html!./index.html";
import "regenerator-runtime/runtime";
import React from 'react';
import Thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {render} from 'react-dom';

import MainView from './view';
import appReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <MainView/>
    </Provider>,
    document.getElementById('root')
);
