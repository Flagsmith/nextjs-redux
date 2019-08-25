import propTypes from 'prop-types';
import '../common/utils';
import '../components/base';
import './api';
import '../styles/styles.scss';
import React from 'react';

global.propTypes = propTypes;
// For debugging reasons for re-rendering components we use whyDidYouRender in dev mode
if (__DEV__ && typeof window !== 'undefined') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js'); whyDidYouRender(React);
}
