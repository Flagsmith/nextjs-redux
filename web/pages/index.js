import React, { PureComponent } from 'react';

class HomePage extends PureComponent {
    static displayName = 'HomePage';

    static whyDidYouRender = __DEV__;

    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                <img src="/static/images/icons-192.png"/>
                Index page new
            </div>
        );
    }
}


export default HomePage;
