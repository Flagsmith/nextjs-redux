// Provides a simple way to track when you click outside of parent component
// Useful for autocompletes / popovers etc
import React from 'react';
import ReactDOM from 'react-dom';

const FocusMonitor = class extends React.Component {
    static displayName = 'FocusMonitor';

    constructor(props, context) {
        super(props, context);
        this.state = { hasFocus: false };
    }

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        if (this.props.isHover) {
            node.addEventListener('mouseover', () => this.focusChanged(true), false);
            node.addEventListener('mouseleave', () => this.focusChanged(false), false);
        } else {
            global.addEventListener('mousedown', this._clickDocument, false);
        }
    }

    componentWillUnmount() {
        const node = ReactDOM.findDOMNode(this);
        if (this.props.isHover) {
            node.removeEventListener('mouseover', () => this.focusChanged(true), false);
            node.removeEventListener('mouseleave', () => this.focusChanged(false), false);
        } else {
            global.removeEventListener('mousedown', this._clickDocument, false);
        }
    }

    toggle = () => {
        if (this.state.hasFocus && (new Date().valueOf() - this.state.updated > 200)) {
            this.focusChanged(!this.state.hasFocus);
        }
    };

    focusChanged = (hasFocus) => {
        if (hasFocus !== this.state.hasFocus) {
            this.setState({
                hasFocus,
                updated: new Date().valueOf(),
            });
            this.props.onFocusChanged(hasFocus);
        }
    };

    _clickDocument = (e) => {
        const component = ReactDOM.findDOMNode(this);
        if (e.target === component || $(component).has(e.target).length) {
            this.focusChanged(true);
        } else {
            this.focusChanged(false);
        }
    };

    render() {
        return this.props.children;
    }
};

FocusMonitor.propTypes = {
    isHover: propTypes.bool,
    onFocusChanged: propTypes.func,
    children: propTypes.node,
};

export default FocusMonitor;
