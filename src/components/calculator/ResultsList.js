import React, {PropTypes} from 'react';
import ResultRow from './ResultRow';

const setResults = results =>
    results.map((result, index) =>
        <ResultRow
            key={index}
            leftCol={result.distance.text}
            rightCol={result.duration.text}/>
    );

const ResultsList = ({results}) => (
    <div>
        <ResultRow
            leftCol="Distance"
            rightCol="Duration"/>
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
