import React, {PropTypes} from 'react';

const InputError = ({error}) => (
    <div className="text-danger">
        {error}
    </div>
);

InputError.propTypes = {
    error: PropTypes.string
};

InputError.defaultProps = {
    error: "Oops! something is feels wrong!"
};

export default InputError;
