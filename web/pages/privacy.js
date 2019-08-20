import React, { PureComponent } from 'react';

class PrivacyPage extends PureComponent {
    static displayName = 'PrivacyPage';

    static whyDidYouRender = __DEV__;

    render() {
        return (
            <div className="container">
                <h1>Privacy</h1>
                <img src="/static/images/icons-512.png"/>
              Privacy page
            </div>
        );
    }
}


export default PrivacyPage;
