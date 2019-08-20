import React, { PureComponent } from 'react';

class AboutPage extends PureComponent {
    static displayName = 'AboutPage';

    static whyDidYouRender = __DEV__;

    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                About page
            </div>
        );
    }
}


export default AboutPage;
