import * as types from './actionsTypes';

export const setOrigin = (origin) => (
    {type: types.SET_ORIGIN, origin}
);

export const setDestination = (destination) => (
    {type: types.SET_DESTINATION, destination}
);
