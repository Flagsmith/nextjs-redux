/**
 * Tests for ageFromDob utility method
 */

// Vendor
import expect from 'expect';

// Application
import Utils from '../utils/base/_utils';

describe('utils - `getTypedValue`', () => {
    const { getTypedValue } = Utils;
    it('returns null for null', () => {
        expect(getTypedValue(null)).toEqual(null);
    });
    it('returns 1 for "1"', () => {
        expect(getTypedValue('1')).toEqual(1);
    });
    it('returns 1.5 for "1.5"', () => {
        expect(getTypedValue('1.5')).toEqual(1.5);
    });
    it('returns "1k" for "1k"', () => {
        expect(getTypedValue('1k')).toEqual('1k');
    });
    it('returns true for "true"', () => {
        expect(getTypedValue('true')).toEqual(true);
    });
    it('returns true for "false"', () => {
        expect(getTypedValue('false')).toEqual(false);
    });
});

describe('utils - `toParam`', () => {
    const { toParam } = Utils;
    it('returns empty string for null', () => {
        expect(toParam(null)).toEqual('');
    });
    it('returns empty string for {}', () => {
        expect(toParam({})).toEqual('');
    });
    it('returns empty string for {}', () => {
        expect(toParam({})).toEqual('');
    });
    it('returns min=100&max=200 for {min:100,max:200}', () => {
        expect(toParam({ min: 100, max: 200 })).toEqual('min=100&max=200');
    });
});

describe('utils - `fromParam`', () => {
    const { fromParam } = Utils;
    it('returns {} for null', () => {
        expect(fromParam(null)).toEqual({});
    });
    it('returns {} for empty string', () => {
        expect(fromParam('')).toEqual({});
    });
    it('returns min=100&max=200 for {min:100,max:200}', () => {
        expect(fromParam('?min=100&max=200')).toEqual({ min: '100', max: '200' });
    });
});

describe('utils - `isValidEmail`', () => {
    const { isValidEmail } = Utils;
    it('returns a true for valid emails', () => {
        expect(isValidEmail('bla@bla.com')).toBeTruthy();
        expect(isValidEmail('bla+1@bla.com')).toBeTruthy();
    });
    it('returns a true for valid emails', () => {
        expect(isValidEmail(null)).toBeFalsy();
        expect(isValidEmail('bla+1@bla')).toBeFalsy();
    });
});

describe('utils - `GUID`', () => {
    const { GUID } = Utils;
    it('returns a unique string', () => {
        expect(GUID()).not.toEqual(GUID());
    });
});
