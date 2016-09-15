import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import CalculatorContainer from './components/calculator/CalculatorContainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={CalculatorContainer}/>
	</Route>
);
