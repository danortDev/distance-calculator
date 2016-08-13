import * as types from '../actions/actionsTypes';
import initialState from '../constants/initialState';

const travelReducer = function(state = initialState.travel, action){
    switch (action.type) {
        case types.SET_ORIGIN:
            return Object.assign({}, state, {origin: action.origin});
        case types.SET_DESTINATION:
            return Object.assign({}, state, {destination: action.destination});
        default:
            return state;
    }
};

export default travelReducer;
