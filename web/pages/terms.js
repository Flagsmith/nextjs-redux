import React, { PureComponent } from 'react';

class TermsPage extends PureComponent {
    static displayName = 'TermsPage';

    static whyDidYouRender = __DEV__;

    render() {
        return (
            <div className="container">
                <h1>Terms</h1>
                Terms page
            </div>
        );
    }
}


export default TermsPage;
