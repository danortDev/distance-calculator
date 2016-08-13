import React from 'react';
import Geosuggest from 'react-geosuggest';

const CalculatorContainer = () => (
    <div className="row">
            <Geosuggest placeholder="Origin"/>
            <Geosuggest placeholder="Destination"/>
    </div>
);

export default CalculatorContainer;
