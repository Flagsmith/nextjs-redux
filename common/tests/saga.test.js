import { put } from 'redux-saga/effects';
import expect from 'expect';
import _ from 'lodash';

import { startup } from '../saga';
import API from '../../project/api';

// Polyfill out API funcs
_.each(API, (f, k) => {
    API[k] = () => {};
});

global.API = API;

describe('startup', () => {
    it('Should set the user when starting up with a token', () => {
        const token = 'test';
        const generator = startup({ token });
        // Call startup loaded
        expect(generator.next().value).toEqual(
            put({ type: Actions.STARTUP_LOADED, data: { ready: true, isOnline: true } }),
        );
        // Also call login loaded with token
        expect(generator.next().value).toEqual(
            put({ type: Actions.LOGIN_LOADED, data: { ready: true, token } }),
        );
        expect(generator.next().value).toBeFalsy();
    });
    it('Should startup without a token', () => {
        const generator = startup();
        expect(generator.next().value).toEqual(
            put({ type: Actions.STARTUP_LOADED, data: { ready: true, isOnline: true } }),
        );
        expect(generator.next().value).toBeFalsy();
    });
});
