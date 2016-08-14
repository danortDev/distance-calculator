import React, {PropTypes} from 'react';
import ResultRow from './ResultRow';

const setResults = results =>
    results.map((result, index) =>
        <ResultRow
            key={index}
            origin={result.origin}
            destination={result.destination}
            duration={result.duration}
            distance={result.distance}/>
    );

const ResultsList = ({results}) => (
    <div className="jumbotron top-20">
        <ResultRow
            origin="Origin"
            destination="Destination"
            distance="Distance"
            duration="Duration"/>
        {setResults(results)}
    </div>
);

ResultsList.propTypes = {
    results: PropTypes.array
};

ResultsList.defaultProps = {
    results: []
};

export default ResultsList;
