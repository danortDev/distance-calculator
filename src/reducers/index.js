import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore, routerReducer as routing} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import initialState from '../constants/initialState';
import {reducer as form} from 'redux-form';
import {reducer as toastr} from 'react-redux-toastr';
import travel from './travelReducer';
import logs from './logReducer';
import asyncProcess from './asyncProcessReducer';

const reducers = {
    form,
    toastr,
    travel,
    asyncProcess,
    logs,
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
