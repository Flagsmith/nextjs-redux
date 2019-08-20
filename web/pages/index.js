import React, { PureComponent } from 'react';

class HomePage extends PureComponent {
    static displayName = 'HomePage';

    static whyDidYouRender = __DEV__;

    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                Index page
            </div>
        );
    }
}


export default HomePage;
