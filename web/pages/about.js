import React, { PureComponent } from 'react';

class AboutPage extends PureComponent {
    static displayName = 'AboutPage';

    static whyDidYouRender = __DEV__;

    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                About page
                <img src="https://as1.ftcdn.net/jpg/00/92/53/56/500_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg"/>
            </div>
        );
    }
}


export default AboutPage;
