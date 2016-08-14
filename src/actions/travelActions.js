import * as types from './actionsTypes';
import {getDistance} from '../services/GoogleMapsService';

export const setOrigin = (origin) => ({
    type: types.SET_ORIGIN, origin
});

export const setDestination = (destination) => ({
    type: types.SET_DESTINATION, destination
});

export const addResults = (results) => ({
    type: types.ADD_RESULTS, results
});

export const setResults = (results) => ({
    type: types.SET_RESULTS, results
});

export const setTravel = (travel) => ({
    type: types.SET_TRAVEL, travel
});

export const calculateDistance = function(location, dispatch){
    return function(dispatch){
        return new Promise(function(resolve,reject){
            getDistance(
                location.origin,
                location.destination,
                dispatch,
                (response, error) => {
                    error ? reject(error) :
                    dispatch(addResults(response.rows[0].elements)) &&
                        resolve(response);
                }
            )
        });
    };
};
