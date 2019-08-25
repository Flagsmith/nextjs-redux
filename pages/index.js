import React, { PureComponent } from 'react';

class HomePage extends PureComponent {
    static displayName = 'HomePage';

    static whyDidYouRender = __DEV__;

    componentDidMount() {
        API.trackPage('Home');
    }

    render() {
        return (
            <div className="container">
                <h1>Home</h1>
            </div>
        );
    }
}


export default HomePage;
