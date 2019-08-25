import React, { Component } from 'react';
import propTypes from 'prop-types';
import Utils from '../../../common/utils/utils';

class InputGroup extends Component {
    render() {
        const {
            props: {
                disabled,
                id = Utils.GUID(),
                inputProps,
                isValid,
                onChange,
                placeholder,
                title,
                value,
                inputGroupClassName,
                className,
                input,
            },
        } = this;

        return (
            <div className={`${className} form-group`}>
                {title ? (<label htmlFor={id} className="cols-sm-2">{title}</label>) : null}
                {inputProps && inputProps.error && (
                <span>
                    <span> - </span>
                    <span id={inputProps.name ? `${inputProps.name}-error` : ''} className="text-danger">
                        {inputProps.error}
                    </span>
                </span>
                )}

                {input || (
                    <Input
                      ref="input"
                      {...inputProps}
                      isValid={isValid}
                      disabled={disabled}
                      value={value}
                      onChange={onChange}
                      id={id}
                      placeholder={placeholder}
                      className={inputGroupClassName}
                    />
                )}

            </div>
        );
    }
}

global.InputGroup = InputGroup;

InputGroup.defaultProps = {};

InputGroup.propTypes = {
    className: propTypes.string,
    disabled: propTypes.bool,
    id: propTypes.string,
    input: propTypes.node,
    inputProps: propTypes.object,
    isValid: propTypes.bool,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    title: propTypes.string,
    value: propTypes.string,
};

export default InputGroup;
