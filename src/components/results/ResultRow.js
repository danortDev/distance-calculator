import React, {PropTypes} from 'react';

const ResultRow = ({origin, destination, duration, distance}) => (
    <div className="row result-row">
        <div className="col-xs-3">
            {origin}
        </div>
        <div className="col-xs-3">
            {destination}
        </div>
        <div className="col-xs-3">
            {duration}
        </div>
        <div className="col-xs-3">
            {distance}
        </div>
    </div>
);

ResultRow.propTypes = {
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired
};

export default ResultRow;
