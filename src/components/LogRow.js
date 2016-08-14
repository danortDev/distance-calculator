import React, {PropTypes} from 'react';

const LogRow = ({action, at}) => (
    <div className="row">
        <div className="col-xs-6">
            {action}
        </div>
        <div className="col-xs-6">
            {at}
        </div>
    </div>
);

LogRow.propTypes = {
    action: PropTypes.string.isRequired,
    at: PropTypes.string.isRequired
};

export default LogRow;
