import * as types from './actionsTypes';

export function beginAsyncProcess(){
    return {type: types.BEGIN_ASYNC_PROCESS};
}

export function endAsyncProcess(){
    return {type: types.END_ASYNC_PROCESS};
}
