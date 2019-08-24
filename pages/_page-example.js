import React, { Component } from 'react';

class AboutPage extends Component {
    static displayName = 'AboutPage';

    static whyDidYouRender = __DEV__;

    // static async getInitialProps({ ctx: { reduxStore } }) {
    // await reduxStore.dispatch(AppActions.login());
    // return {};
    // }

    render() {
        return (
            <div className="container">
                About page
            </div>
        );
    }
}


export default AboutPage;
