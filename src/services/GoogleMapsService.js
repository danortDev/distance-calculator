import request from 'superagent';
import gm from '../constants/googleMapsConstants';
import * as asyncProcessActions from '../actions/asyncProcessActions';

const formatAddress = (address) =>
    address.replace(" ", "+");

const formatLocation = (location) =>
    (location.lat + ',' + location.lng) ;

const getLocation = (place) =>
    place.location ?
        formatLocation(place.location) :
        formatAddress(place);

export const getDistanceURL = (origin, destination) =>
    gm.GOOGLE_MAPS_API + 'distancematrix/' +
    gm.RESPONSE_FORMAT +
    '?origins=' + getLocation(origin) +
    '&destinations=' + getLocation(destination) +
    '&key=' + gm.GOOGLE_MAPS_KEY;

export function getDistance(origin, destination, dispatch) {
    dispatch(asyncProcessActions.beginAsyncProcess());
    return new Promise(function (resolve, reject) {
        request
            .get(getDistanceURL(origin, destination))
            .set('Accept', 'application/json')
            .end(function (err, res) {
                // TODO handle response
                console.log(res, err);
                dispatch(asyncProcessActions.endAsyncProcess());
                resolve();
        });
    });
}
