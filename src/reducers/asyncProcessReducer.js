import * as types from '../actions/actionsTypes';

const asyncProcessReducer = function( state = 0, action){
    return action.type == types.BEGIN_ASYNC_PROCESS ?
        state + 1 : action.type == types.END_ASYNC_PROCESS ?
        state - 1 : state;
};

export default asyncProcessReducer;
