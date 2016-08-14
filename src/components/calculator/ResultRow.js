import React, {PropTypes} from 'react';

const ResultRow = ({leftCol, rightCol}) => (
    <div className="row">
        <div className="col-xs-4 col-xs-offset-2">
            {leftCol}
        </div>
        <div className="col-xs-4 col-xs-offset-2">
            {rightCol}
        </div>
    </div>
);

ResultRow.propTypes = {
    leftCol: PropTypes.string.isRequired,
    rightCol: PropTypes.string.isRequired
};

export default ResultRow;
