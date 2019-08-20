import React, { PureComponent } from 'react';

class PrivacyPage extends PureComponent {
    static displayName = 'PrivacyPage';

    static whyDidYouRender = __DEV__;

    render() {
        return (
            <div className="container">
                <h1>Privacy</h1>
                Privacy page
            </div>
        );
    }
}


export default PrivacyPage;
