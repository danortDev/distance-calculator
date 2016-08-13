import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore, routerReducer as routing} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import initialState from '../constants/initialState';
import {reducer as form} from 'redux-form';
import travel from './travelReducer';
import asyncProcess from './asyncProcessReducer';

const reducers = {
    form,
    travel,
    asyncProcess,
    routing
};

const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
