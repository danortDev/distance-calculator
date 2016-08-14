import initialState from '../constants/initialState';

const is_loggable = (type) =>
    type.substring(0, 9) == 'LOGGABLE_';

const logReducer = (state = initialState.log, action) =>
    is_loggable(action.type) ?
        [ ...state, action.type] : state;

export default logReducer;
