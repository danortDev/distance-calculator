import initialState from '../constants/initialState';
import moment from 'moment';

const is_loggable = (type) =>
    type.substring(0, 9) == 'LOGGABLE_';

const logReducer = (state = initialState.logs, action) =>
    is_loggable(action.type) ?[
        {
            action: action.type,
            at: moment().format('h:mm:ss:SSS a')
        },
        ...state
    ] : state;

export default logReducer;
