import * as types from './actionsTypes';
import {getDistance} from '../services/GoogleMapsService';

export const setOrigin = (origin) => ({
    type: types.LOGGABLE_SET_ORIGIN, origin
});

export const setDestination = (destination) => ({
    type: types.LOGGABLE_SET_DESTINATION, destination
});

export const addResults = (results) => ({
    type: types.LOGGABLE_ADD_RESULTS, results
});

export const setResults = (results) => ({
    type: types.LOGGABLE_SET_RESULTS, results
});

export const setTravel = (travel) => ({
    type: types.LOGGABLE_SET_TRAVEL, travel
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
                    dispatch(addResults({
                        origin: response.originAddresses[0],
                        destination: response.destinationAddresses[0],
                        duration: response.rows[0].elements[0].duration.text,
                        distance: response.rows[0].elements[0].distance.text
                    })) && resolve(response);
                }
            )
        });
    };
};
