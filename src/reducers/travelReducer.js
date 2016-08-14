import * as types from '../actions/actionsTypes';
import initialState from '../constants/initialState';

const travelReducer = function(state = initialState.travel, action){
    switch (action.type) {
        case types.LOGGABLE_SET_TRAVEL:
            return action.travel;
        case types.LOGGABLE_SET_ORIGIN:
            return Object.assign({}, state, {origin: action.origin});
        case types.LOGGABLE_SET_DESTINATION:
            return Object.assign({}, state, {destination: action.destination});
        case types.LOGGABLE_SET_RESULTS:
            return Object.assign({}, state, {results: action.results});
        case types.LOGGABLE_ADD_RESULTS:
            return Object.assign({}, state, {results: [action.results] });
        default:
            return state;
    }
};

export default travelReducer;
