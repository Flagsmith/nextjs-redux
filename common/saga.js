import { put, all, takeLatest } from 'redux-saga/effects';
// import _data from './utils/_data';
import './app-actions';
import _data from './utils/_data';
import Utils from './utils/utils';

export function* startup(action = {}) {
    const {
        token,
        ...rest
    } = action.data;
    const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine;
    yield put({ type: Actions.STARTUP_LOADED, data: { ready: true, isOnline, ...rest } });
    if (token) {
        yield put({ type: Actions.LOGIN_LOADED, data: { ready: true, token } });
    }
}

export function* login() {
    try {
        // todo: any auth calls go here
        const token = Utils.GUID();
        API.setStoredToken(token);
        yield put({ type: Actions.LOGIN_LOADED, data: { loaded: new Date().valueOf(), token } });
        API.loggedIn();
    } catch (e) {
        yield put(API.ajaxHandler(Actions.LOGIN_ERROR, e));
    }
}

export function* logout() {
    yield API.logout();
}

export function* getWidgets() {
    try {
        const data = yield _data.get('https://jsonplaceholder.typicode.com/users');
        // const data = yield res.json();
        yield put({ type: Actions.GET_WIDGETS_LOADED, data });
    } catch (e) {
        yield put(API.ajaxHandler(Actions.GET_WIDGETS_ERROR, e));
    }
}

function* rootSaga() {
    yield all([
        takeLatest(Actions.STARTUP, startup),
        takeLatest(Actions.LOGIN, login),
        takeLatest(Actions.LOGOUT, logout),
        takeLatest(Actions.GET_WIDGETS, getWidgets),
    ]);
}


export default rootSaga;
