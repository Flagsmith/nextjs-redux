// import propTypes from 'prop-types';
import React, { PureComponent } from 'react';
import '../project/polyfill';
import withAuth from '../common/providers/withAuth';
import propTypes from 'prop-types';

class LoginPage extends PureComponent {
    static displayName = 'LoginPage';

    static propTypes = {
        login: propTypes.func.isRequired,
    };

    static whyDidYouRender = __DEV__;

    render() {
        return (
            <div>
                <h1>Login</h1>
                <button type="button" onClick={this.props.login}>Login</button>
            </div>
        );
    }
}

export default withAuth(LoginPage);
