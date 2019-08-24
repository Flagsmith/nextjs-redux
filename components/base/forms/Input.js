/**
 * Created by kylejohnson on 30/07/2016.
 */
import React from 'react';
import MaskedInput from 'react-maskedinput';
import propTypes from 'prop-types';


import cn from 'classnames';

const maskedCharacters = {
    'a': {
        validate(char) {
            return /[ap]/.test(char);
        },
    },
    'm': {
        validate(char) {
            return /\w/.test(char);
        },
        transform() {
            return 'm';
        },
    },
};

const Input = global.Input = class extends React.Component {
    static displayName = 'Input';

    constructor(props, context) {
        super(props, context);
        this.state = { shouldValidate: false };
    }

    onFocus = (e) => {
        this.setState({
            isFocused: true,
        });
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };

    focus = () => {
        this.refs.input.focus();
    };

    onKeyDown = (e) => {
        if (Utils.keys.isEscape(e)) {
            this.refs.input.blur();
        }
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }
    };

    validate = () => {
        this.setState({
            shouldValidate: true,
        });
    };

    onBlur = (e) => {
        this.setState({
            shouldValidate: true,
            isFocused: false,
        });
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };

    render() {
        const { isValid, mask, placeholderChar, ...rest } = this.props;

        const className = cn({
            'input-container': true,
            'form-control': true,
            'focused': this.state.isFocused,
            'invalid': this.state.shouldValidate && !isValid,
        }, this.props.className);

        const inputClassName = cn({
            input: true,
        }, this.props.inputClassName);

        return (
            <div
              className={className}
            >
                {mask ? (
                    <MaskedInput
                      ref="input"
                      {...rest}
                      mask={this.props.mask}
                      formatCharacters={maskedCharacters}
                      onKeyDown={this.onKeyDown}
                      onFocus={this.onFocus}
                      onBlur={this.onBlur}
                      className={inputClassName}
                      placeholderChar={placeholderChar}
                    />
                ) : (
                    <input
                      ref="input"
                      {...rest}
                      onFocus={this.onFocus}
                      onKeyDown={this.onKeyDown}
                      onBlur={this.onBlur}
                      className={inputClassName}
                    />
                )}
            </div>
        );
    }
};

Input.defaultProps = {
    className: '',
    placeholderChar: ' ',
    isValid: true,
};

Input.propTypes = {
    isValid: propTypes.bool,
    onKeyDown: propTypes.func,
    onFocus: propTypes.func,
    onBlur: propTypes.func,
    placeholderChar: propTypes.string,
    mask: propTypes.string,
    className: propTypes.string,
    inputClassName: propTypes.string,
    onSearchChange: propTypes.func,
};
