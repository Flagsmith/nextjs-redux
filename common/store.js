
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import './app-actions';
import rootSaga from './saga';

export default function (initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware,
        promiseMiddleware,
    ];

    const store = createStore(
        require('./reducer').default,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares)),
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}
