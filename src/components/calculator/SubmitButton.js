import React, {PropTypes} from 'react';

const SubmitButton = ({text, disabled, className}) => (
    <button
        type="submit"
        disabled={disabled}
        className={className}>
        {text}
    </button>
);

SubmitButton.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

SubmitButton.defaultProps = {
    text: "Calculate distance",
    disabled: false,
    className: "btn btn-primary"
};

export default SubmitButton;
