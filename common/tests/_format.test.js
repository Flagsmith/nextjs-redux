/**
 * Tests for ageFromDob utility method
 */

// Vendor
import expect from 'expect';

// Application
import Format from '../utils/base/_format';

describe('format - `enumeration.get`', () => {
    const { enumeration: { get } } = Format;
    expect(get(null)).toEqual('');
    expect(get('MY_CONSTANT')).toEqual('My constant');
    expect(get('test')).toEqual('Test');
});

describe('format - `enumeration.get`', () => {
    const { enumeration: { set } } = Format;
    expect(set(null)).toEqual('');
    expect(set('My Constant')).toEqual('MY_CONSTANT');
    expect(set('test')).toEqual('TEST');
});

describe('format - `camelCase`', () => {
    const { camelCase } = Format;
    expect(camelCase(null)).toEqual('');
    expect(camelCase('bla bla')).toEqual('Bla bla');
    expect(camelCase('bla')).toEqual('Bla');
});

describe('format - `cssImage`', () => {
    const { cssImage } = Format;
    expect(cssImage(null)).toEqual('none');
    expect(cssImage('ok.png')).toEqual('url("ok.png")');
});

describe('format - `ordinal`', () => {
    const { ordinal } = Format;
    expect(ordinal(null)).toEqual('0');
    expect(ordinal(1)).toEqual('1st');
    expect(ordinal(22)).toEqual('22nd');
    expect(ordinal(33)).toEqual('33rd');
    expect(ordinal(44)).toEqual('44th');
    expect(ordinal(55)).toEqual('55th');
});

describe('format - `truncateText`', () => {
    const { truncateText } = Format;
    expect(truncateText(null)).toEqual(null);
    expect(truncateText('abc', 1)).toEqual('a...');
    expect(truncateText('abc', 2)).toEqual('ab...');
    expect(truncateText('abc', 3)).toEqual('abc');
});

describe('format - `removeAccents`', () => {
    const { removeAccents } = Format;
    expect(removeAccents(null)).toEqual('');
    expect(removeAccents('âêîôûŵŷäëïöüẅÿàèìòùẁỳáéíóúẃý')).toEqual('aeiouwyaeiouwyaeiouwyaeiouwy');
});
