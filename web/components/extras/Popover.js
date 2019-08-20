import cn from 'classnames';
import FocusMonitor from './virtualised/helpers/FocusMonitor';

const Popover = class extends React.Component {
    static displayName = 'Popover';

    constructor(props, context) {
        super(props, context);
        this.state = { isActive: false };
    }

    _focusChanged = isActive => this.setState({ isActive });

    toggle = () => {
        this.refs.focus.toggle();
    };

    render() {
        const classNames = cn({
            popover: true,
            in: this.state.isActive,
        }, this.props.className);

        return (
            <FocusMonitor
              ref="focus"
              onFocusChanged={this._focusChanged}
              isHover={this.props.isHover}
            >
                <div className={this.props.className}>
                    {this.props.renderTitle(this.toggle, this.state.isActive)}
                    <div className="popover-inner">
                        <div className={`${classNames} popover-bt`}>
                            {this.props.children(this.toggle)}
                        </div>
                    </div>
                </div>
            </FocusMonitor>
        );
    }
};

Popover.propTypes = {
    isHover: propTypes.bool,
    className: propTypes.string,
    renderTitle: propTypes.func,
    children: propTypes.any,
};

export default Popover;
