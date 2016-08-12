import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import store, {history} from './reducers/index';
import {Provider} from 'react-redux';

//Components
import routes from './routes';
import	'./styles/main.scss';

render (
	<Provider store={store}>
		<Router
			history={history}
			routes={routes} />
	</Provider>,
	document.getElementById('app')
);
